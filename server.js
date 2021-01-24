const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 3001;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('conection', (socket) => {
    console.log('new connection');
    socket.on('disconnect', () => {
        console.log('disconnected');
    });
});

app.use(router);

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});


