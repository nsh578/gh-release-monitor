import { Octokit } from "@octokit/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./js/pages/home/Home";
import SignIn from "./js/pages/auth/SignIn";
import SignUp from "./js/pages/auth/SignUp";
import "./App.css";

const octokit = new Octokit();

octokit
  .request("GET /repos/{owner}/{repo}/releases", {
    owner: "microsoft",
    repo: "vscode",
  })
  .then((response) => {
    console.log(response);
  });

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
