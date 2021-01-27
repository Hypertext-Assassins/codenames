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
  console.log(`${socket.id} has connected`);
  socket.emit("hello", socket.id)
  socket.on("tappedCard", (arg) => {
      console.log(arg)
      socket.emit("tappedCard", arg)
  })

  socket.on("helloworld", function(msg){
      console.log("helloworld testing server.js")
      io.emit("helloworld", msg) //right now it's io.emit instead of socket b/c not in a room yet so i am emitting to ALL clients.
  })

  socket.on("join room", (roomId) => {
      console.log(`server Socket Id ${socket.id} has joined ${roomId}`)
      socket.join(roomId)
      io.sockets.emit("game join room", roomId)
    //   socket.to(roomId).emit("game join room", roomId)
      socket.to(roomId).emit("landing join room", roomId)
  })

  socket.on("generate words", function(words){
      io.emit("generate words", words)
  })
});


// io.on('connection', (client) => {
//     client.on('subscribeToTimer', (interval) => {
//       console.log('client is subscribing to timer with interval ', interval);
//       setInterval(() => {
//         client.emit('timer', new Date());
//       }, interval);
//     });
//   });

http.listen(4000, function() {
  console.log("listening on *:4000");
});