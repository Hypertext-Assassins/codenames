// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// // io.on('connection', (client) => {
// //     client.on('subscribeToTimer', (interval) => {
// //       console.log('client is subscribing to timer with interval ', interval);
// //       setInterval(() => {
// //         client.emit('timer', new Date());
// //       }, interval);
// //     });
// //   });

// http.listen(4000, () => {
//   console.log('listening on *:4000');
// });

const app = require("express")();
const http = require("http").Server(app);
// const io = require("socket.io")(http);

const io = require("socket.io")(http, {
    cors: {
      origin: "http://localhost:3000", //Since Socket.IO v3, you need to explicitly enable CORS
      methods: ["GET", "POST"]
    }
  });

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(4000, function() {
  console.log("listening on *:4000");
});