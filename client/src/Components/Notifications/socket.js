import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:3001');

function subscribeToNotifications(cb) {
  socket.on('cardNotification', card => cb(null, card));
  socket.emit('subscribeToNotifications', userID);
}
export { subscribeToNotifications };