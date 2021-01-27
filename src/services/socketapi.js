// import openSocket from 'socket.io-client';
// const  socket = openSocket('http://localhost:4000');

import io from 'socket.io-client'
const socket = io('http://localhost:4000')

// function subscribeToTimer(cb) {
//   socket.on('timer', timestamp => cb(null, timestamp));
//   socket.emit('subscribeToTimer', 1000);
// }

// export { subscribeToTimer };

export function fromSocketAPI(word) {
    console.log(`${word} again`)
    socket.emit("card tapped", word)
}