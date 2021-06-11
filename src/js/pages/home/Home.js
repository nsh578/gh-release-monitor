import React, { Component } from "react";
import Repositories from "./Repositories";
import ReleaseNote from "./ReleaseNote";
import "./styles/Home.css";

class Home extends Component {
  render() {
    //Load signIn page if not logged in. o.w. load Monitor
    return (
      <div className="home">
        <Repositories />
        <ReleaseNote />
      </div>
    );
  }
}

export default Home;
