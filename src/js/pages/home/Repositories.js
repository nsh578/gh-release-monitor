import React, { Component } from "react";
import { connect } from "react-redux";
import RepositoryMenu from "./RepositoryMenu";
import RepositoryList from "./RepositoryList";
import * as RepositoryActions from "../../actions/repositoryActions";

class Repositories extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={() => this.props.addRepository("mike", "lumanu")}>
          Add
        </button>
        <button onClick={() => console.log(this.props.repo)}>log</button>
        <RepositoryMenu />
        <RepositoryList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRepository: (owner, repo) =>
      dispatch(RepositoryActions.addRepository(owner, repo)),
  };
};

const mapStateToProps = (state) => {
  return {
    repo: state.repository.repositories,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
