import React, { Component } from "react";
import Notifications from "./Notifications";
import logo from "../../../img/logo.png";
import "./styles/Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <div>
            <li className="logo">
              <img src={logo} alt="" />
            </li>
            <li className="title">Github Release Monitor Tool</li>
          </div>
          <div>
            <li>
              <Notifications />
            </li>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Nav;
