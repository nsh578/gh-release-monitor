import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { signIn } from "../../actions/authActions";
import "./styles/SignIn.css";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError } = this.props;
    return (
      <form className="signin-page" onSubmit={this.handleSubmit}>
        <div className="auth-input">
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
        </div>
        <div className="auth-input">
          <input
            type="password"
            id="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
          />
        </div>
        <div className="auth-buttons">
          <input type="submit" value="Login" />
          <input
            type="button"
            value="Sign Up"
            onClick={() => this.props.history.push("/signup")}
          />
        </div>
        {authError ? <p className="login-error">{authError}</p> : null}
      </form>
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
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
