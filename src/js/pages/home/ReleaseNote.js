import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./styles/ReleaseNote.css";

class ReleaseNote extends Component {
  render() {
    let repo = null;
    if (this.props.repos) {
      repo = this.props.repos[this.props.currentIndex];
    }
    return (
      <div className="release-note-container">
        {repo && (
          <Fragment>
            <h3>
              {repo.owner} {repo.repo}
            </h3>
            <p>{repo.releaseBody}</p>
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    repos: state.repository.repositories,
    currentIndex: state.repository.currentIndex,
  };
};

export default connect(mapStateToProps, null)(ReleaseNote);
