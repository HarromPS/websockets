// set up express app 
import express from "express";
import http from "http";    // use to create HTTP server
import path from "path";    // serving HTML
import url from "url";
import {Server} from "socket.io";   // import socket io server

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const PORT = 9001;
const app = express();
const server = http.createServer(app);
const io = new Server(server); // create a socket io instance by passing HTTP server

// Socket io
// now listen when a connection from client of incoming sockets and log it
// but a client is called as socket in socket.io which carries client info
io.on("connection",(socket)=>{
    // console.log("A user connected", socket.id); // add a script in frontend to test this

    // listen a client/socket 
    socket.on("client-message",(message)=>{
        console.log(message)
        io.emit("server-message",`${socket.id}:${message}`);   // broadcast message to all connected clients
    })
});

// plugins-middlewares
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname),"public","index.html");   // join folders and files
});

// listen server 
server.listen(PORT,()=>{
    console.log(`Server running port ${PORT}`);
})