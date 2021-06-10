import React, { Component } from "react";
import Repositories from "./Repositories";
import ReleaseNote from "./ReleaseNote";

class Monitor extends Component {
  render() {
    return (
      <div>
        <Repositories />
        <ReleaseNote />
      </div>
    );
  }
}

export default Monitor;
