import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Nav from "./js/pages/nav/Nav";
import Home from "./js/pages/home/Home";
import SignIn from "./js/pages/auth/SignIn";
import SignUp from "./js/pages/auth/SignUp";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
