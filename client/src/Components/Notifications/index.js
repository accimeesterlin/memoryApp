import { subscribeToNotifications } from './socket';
import React, { Component } from 'react';
import './socket.css';

class Notifications extends Component {
  constructor(props) {
    super(props);
    subscribeToNotifications((err, ) => {
      this.setState({
        timestamp
      })
      // Let's check whether notification permissions have already been granted
      if (Notification.permission === "granted") {
        const notification = new Notification(timestamp);
        // Otherwise, we need to ask the user for permission
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
          if (permission === "granted") {
            // const notification = new Notification(timestamp);
            const options = {
                'body': 'body',
                'icon': 'https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/leaf.png'
            }
            const nn = new Notification(timestamp, options);
            nn.onclick = function(x) {
                window.focus()
                nn.close()
            }
          }
        })
      }
    })
  }
  state = {
    timestamp: 'no timestamp yet'
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro white">
          This is the timer value: {this.state.timestamp}
        </p>
      </div>

    );
  }
};

export default Notifications;

