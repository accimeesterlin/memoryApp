
const config = require('../config/scheduler.js')
const db = require("../models");
import card from "../controllers/cardsController"

const pollingInterval = config.interval;
const reminders = config.reminders;

export default httpServer => {
    const io = require('socket.io')(httpServer);
    io.on('connection', (client) => {

        client.on('subscribeToNotifications', (userID) => {
            console.log(`User with ID [${userID}] subscribed to notifications`);

            setInterval(() => {
                let since;
                since = new Date() + pollingInterval * 1000 - reminders.first * 1000;
                card.nextCardsForUser(userID, 0, since, sendNotification);

                since = new Date() + pollingInterval * 1000 - reminders.second * 1000;
                card.nextCardsForUser(userID, 1, since, sendNotification);

                since = new Date() + pollingInterval * 1000 - reminders.recurrent * 1000;
                card.nextCardsForUser(userID, { $gte: 2 }, since, sendNotification);

                // TODO: Move to controller
                nextCardsForUser = function (userID, iteration, since, cb) {
                    db.Card.findAll({
                            where: {
                                userID: userID,
                                active: true,
                                shownCount: iteration,
                                lastShown: { $gte: since },
                            }
                        })
                        .then(dbModel => cb(dbModel))
                        .catch(err => { });
                }

            }, pollingInterval);
        });

        // TODO: Only expect card ID, and restore Card object from DB by that ID
        client.on('answer', (card, givenAnswer) => {
            if (givenAnswer == card.seed) {
                // TODO: implement controller method
                card.deactivate(card.id);
            }
        });

        sendNotification = card => {
            // TODO: Only pass the fileds needed for rendering
            client.emit('cardNotification', card);                    
                // TODO: implement controller method
            card.incrementShown(card.id);
        }

    });
}