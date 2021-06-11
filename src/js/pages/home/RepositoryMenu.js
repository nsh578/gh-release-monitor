import React, { Component } from "react";
import { Popup } from "reactjs-popup";
import add from "../../../img/add.png";
import refresh from "../../../img/refresh.png";
import "./styles/RepositoryMenu.css";

class RepositoryMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: "",
      repo: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  addRepository = () => {
    this.props.addRepository(this.state.owner, this.state.repo);
  };

  render() {
    return (
      <div className="repository-menu">
        <h3>Tracked Repositories</h3>
        {/* <button onClick={() => this.props.addRepository("mike", "lumanu")}>
          <img src={add} alt="" />
        </button> */}

        <Popup trigger={<img className="add-button" src={add} alt="" />} modal>
          {(close) => (
            <div className="add-repository-popup">
              <button onClick={close}>&times;</button>

              <div>
                Owner:{" "}
                <input type="text" id="owner" onChange={this.handleChange} />
              </div>
              <div>
                Repo:{" "}
                <input type="text" id="repo" onChange={this.handleChange} />
              </div>

              <input type="button" onClick={this.addRepository} value="Add" />
            </div>
          )}
        </Popup>

        <button onClick={() => this.props.loadRepository()}>
          <img src={refresh} alt="" />
        </button>
      </div>
    );
  }
}

export default RepositoryMenu;
