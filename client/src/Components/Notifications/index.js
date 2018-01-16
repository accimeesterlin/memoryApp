import { subscribeToTimer } from './socket';
import React, { Component } from 'react';


class Notifications extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => {
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
            const notification = new Notification(timestamp);
          }
        })
      }
    });
  };
  state = {
    timestamp: 'no timestamp yet'
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          This is the timer value: {this.state.timestamp}
        </p>
      </div>
    );
  }
};

export default Notifications;

