### WebSockets README

---

#### **Overview**
WebSockets is a protocol that provides full-duplex communication between a client and a server over a single persistent connection. It is ideal for real-time web applications like chat systems, live notifications, multiplayer games, or financial dashboards.

#### **Installation**
```code
pnpm add socket.io
```
---

#### **Key Features**
- **Full-Duplex Communication**: Both client and server can send and receive data simultaneously.
- **Persistent Connection**: No need to re-establish a connection for every message.
- **Low Latency**: Reduces overhead compared to HTTP requests, making it suitable for real-time data exchange.

---

#### **How It Works**
1. **Handshake**: 
   - A WebSocket connection starts as an HTTP request with an "Upgrade" header to switch the protocol from HTTP to WebSocket.
2. **Connection Establishment**:
   - Once the server acknowledges, the WebSocket connection is established, and the client and server can communicate freely.
3. **Data Exchange**:
   - Both parties can send messages without the overhead of establishing a new connection.
4. **Connection Termination**:
   - Either the client or server can close the connection when communication is no longer required.

---

#### **Basic Workflow**
1. Client initiates a connection to the server using the WebSocket URL (`ws://` or `wss://` for secure connections).
2. Server upgrades the HTTP connection to a WebSocket connection.
3. Both client and server exchange data as needed.
4. The connection is closed when communication ends.

---

#### **Code Example**

**Server (Node.js with `ws` library):**
```javascript
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Client connected');

    // Receive message from client
    socket.on('message', (message) => {
        console.log('Received:', message);
        socket.send(`Server received: ${message}`);
    });

    // Handle disconnection
    socket.on('close', () => {
        console.log('Client disconnected');
    });
});
```

**Client (Browser):**
```javascript
const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.onopen = () => {
    console.log('Connected to server');
    socket.send('Hello, Server!');
};

// Receive message
socket.onmessage = (event) => {
    console.log('Message from server:', event.data);
};

// Handle errors
socket.onerror = (error) => {
    console.error('WebSocket error:', error);
};

// Handle connection close
socket.onclose = () => {
    console.log('Connection closed');
};
```

---

#### **Applications**
- **Chat Applications**: Real-time messaging systems like WhatsApp or Slack.
- **Online Games**: Multiplayer games requiring instant updates.
- **Live Notifications**: Real-time updates for events like stock prices, sports scores.
- **Collaborative Tools**: Tools like Google Docs with live editing.
- **IoT Communication**: Devices interacting with real-time data streams.

---

#### **Advantages**
- Efficient for real-time communication.
- Reduced network latency and bandwidth usage.
- Persistent connection eliminates repetitive handshake overhead.

#### **Disadvantages**
- Requires careful connection management to handle drops or errors.
- May not be ideal for low-frequency or infrequent data updates.

---

### 🌐 Stay Connected

- **GitHub**: [HarromPS](https://github.com/HarromPS/)
- **Linkedin**: [HariomShivhare](https://www.linkedin.com/in/hariom-shivhare-a32803290/)

---