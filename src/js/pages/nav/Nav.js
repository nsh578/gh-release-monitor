import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut } from "../../actions/authActions";
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
            <li>
              <button onClick={this.props.signOut}>Sign Out</button>
            </li>
          </div>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
