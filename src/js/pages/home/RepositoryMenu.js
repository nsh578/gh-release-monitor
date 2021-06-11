import React, { Component } from "react";
import add from "../../../img/add.png";
import refresh from "../../../img/refresh.png";
import "./styles/RepositoryMenu.css";

class RepositoryMenu extends Component {
  render() {
    return (
      <div className="repository-menu">
        <h3>Tracked Repositories</h3>
        <button onClick={() => this.props.addRepository("mike", "lumanu")}>
          <img src={add} alt="" />
        </button>
        <button onClick={() => this.props.loadRepository()}>
          <img src={refresh} alt="" />
        </button>
      </div>
    );
  }
}

export default RepositoryMenu;
