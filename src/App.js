import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Nav from "./js/pages/nav/Nav";
import Home from "./js/pages/home/Home";
import SignIn from "./js/pages/auth/SignIn";
import SignUp from "./js/pages/auth/SignUp";
import "./App.css";

class App extends Component {
  render() {
    if (!this.props.auth.isLoaded) {
      return <Fragment></Fragment>;
    }
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/">
            {this.props.auth.uid ? <Home /> : <Redirect to="/signin" />}
          </Route>
          <Route path="/signin/">
            {this.props.auth.uid ? <Redirect to="/" /> : <SignIn />}
          </Route>
          <Route path="/signup">
            {this.props.auth.uid ? <Redirect to="/" /> : <SignUp />}
          </Route>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, null)(App);
