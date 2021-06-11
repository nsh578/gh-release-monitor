import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { signUp } from "../../actions/authActions";
import "./styles/SignUp.css";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    passwordCheck: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { signUpError } = this.props;
    return (
      <form className="signup-page" onSubmit={this.handleSubmit}>
        <p className="signup-label">- Sign Up -</p>
        <div className="signup-input">
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
        </div>
        <div className="signup-input">
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </div>
        <div className="signup-input">
          <input
            type="password"
            id="passwordCheck"
            placeholder="Reenter Password "
            onChange={this.handleChange}
          />
        </div>

        <div className="signup-buttons">
          <input
            type="button"
            id="sign-up-button"
            value="Cancel"
            onClick={() => this.props.history.push("/signin")}
          />
          <input type="submit" id="sign-up-button" value="Sign Up" />
        </div>
        {signUpError ? <p className="signup-error">{signUpError}</p> : null}
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signUpError: state.auth.signUpError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
