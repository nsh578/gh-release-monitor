import React, { Component } from "react";
import { connect } from "react-redux";
import RepositoryMenu from "./RepositoryMenu";
import RepositoryList from "./RepositoryList";
import * as RepositoryActions from "../../actions/repositoryActions";

class Repositories extends Component {
  componentDidMount() {
    this.props.loadRepositories();
  }

  render() {
    return (
      <div className="repositories-container">
        <RepositoryMenu addRepository={this.props.addRepository} />
        <RepositoryList
          repos={this.props.repos}
          selectRepository={this.props.selectRepository}
          userId={this.props.auth.uid}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRepository: (owner, repo) =>
      dispatch(RepositoryActions.addRepository(owner, repo)),
    loadRepositories: () => dispatch(RepositoryActions.loadRepositories()),
    selectRepository: (ind, repoId) =>
      dispatch(RepositoryActions.selectRepository(ind, repoId)),
  };
};

const mapStateToProps = (state) => {
  return {
    repos: state.repository.repositories,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
