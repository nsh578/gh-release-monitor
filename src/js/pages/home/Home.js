import React, { Component } from "react";
import Monitor from "./Monitor";
import Repositories from "./Repositories";
import ReleaseNote from "./ReleaseNote";
import logo from "../../../img/logo.png";
import "./styles/Home.css";

class Home extends Component {
  render() {
    //Load signIn page if not logged in. o.w. load Monitor
    return (
      <div className="home">
        <img src={logo} alt="" />
        <span>Github Release Monitor Tool</span>
        <Monitor>
          <Repositories />
          <ReleaseNote />
        </Monitor>
      </div>
    );
  }
}

export default Home;
