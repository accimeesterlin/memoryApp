
const config = require('../config/scheduler.js')
import card from "../server/controllers/cardsController"

const pollingInterval = config.interval;
const reminders = config.reminders;

export default httpServer => {
    const io = require('socket.io')(httpServer);
    io.on('connection', (client) => {

        client.on('subscribeToNotifications', (userID) => {
            console.log(`User with ID [${userID}] subscribed as client ${client}`);

            setInterval(() => {
                let since;
                since = new Date(new Date().getTime() + pollingInterval * 1000 - reminders.first * 1000);
                card.nextCardsForUser(userID, 0, since, sendNotification);

                since = new Date(new Date().getTime() + pollingInterval * 1000 - reminders.second * 1000);
                card.nextCardsForUser(userID, 1, since, sendNotification);

                since = new Date(new Date().getTime() + pollingInterval * 1000 - reminders.recurrent * 1000);
                card.nextCardsForUser(userID, { $gte: 2 }, since, sendNotification);
            }, pollingInterval * 1000);
        });

        // TODO: Only expect card ID, and restore Card object from DB by that ID
        client.on('answer', (card, givenAnswer) => {
            if (givenAnswer == card.seed) {
                // TODO: implement controller method
                card.deactivate(card.id);
            }
        });

        const sendNotification = cards => {
            if (cards.length == 0) {
                console.log(`No cards for client ${client}`)
            }
            // cards.forEach(function(card) {
            for (let card of cards) {
                console.log(`Sending card ${card} to client ${client}`)
                // TODO: Only pass the fileds needed for rendering
                client.emit('cardNotification', card);                    
                // TODO: implement controller method
                card.incrementShown(card.id);
            }
            // }, this);
        }

    });
}