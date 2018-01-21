import openSocket from 'socket.io-client';

const  socket = openSocket(window.location.origin);

let userID = 1;

function subscribeToNotifications(cb) {
  socket.on('cardNotification', card => cb(null, card));
  socket.emit('subscribeToNotifications', userID);
}
export { subscribeToNotifications };