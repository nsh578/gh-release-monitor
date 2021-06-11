import React, { Component, Fragment } from "react";
import notification from "../../../img/notification.png";
import "./styles/Notifications.css";

class Notifications extends Component {
  render() {
    return (
      <Fragment>
        <img className="notification-icon" src={notification} alt="" />
      </Fragment>
    );
  }
}

export default Notifications;
