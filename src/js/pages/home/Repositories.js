import React, { Component } from "react";
import { connect } from "react-redux";
import RepositoryMenu from "./RepositoryMenu";
import RepositoryList from "./RepositoryList";
import * as RepositoryActions from "../../actions/repositoryActions";

class Repositories extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="repositories-container">
        <RepositoryMenu addRepository={this.props.addRepository} />
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
