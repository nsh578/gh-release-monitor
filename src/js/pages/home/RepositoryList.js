import React, { Component } from "react";
import RepositoryDetail from "./RepositoryDetail";

class RepositoryList extends Component {
  render() {
    return (
      <div>
        {this.props.repos.map((repo) => {
          return <RepositoryDetail key={repo.url} repo={repo} />;
        })}
      </div>
    );
  }
}

export default RepositoryList;
