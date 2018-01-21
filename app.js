var PORT = process.env.PORT || 3001; // Sets an initial port. We'll use this later in our listener
// ensure environment variables are loaded
import App from './server';

// Requiring our models for syncing
import db from './server/models';

const app = App(__dirname);

const server = require('https').Server(app);
const io = require('socket.io')(server);

//use sync({force:true}) to drop all tables before trying to create
db.sequelize.sync().then(function() {
  server.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
  });
});

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});
