import openSocket from 'socket.io-client';

const herokuURL = 'https://planttheseed.herokuapp.com';
const socket = location.protocol === 'https:' ? openSocket(herokuURL) : openSocket();

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}
export { subscribeToTimer };