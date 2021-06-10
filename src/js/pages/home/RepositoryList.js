import React, { Component } from "react";
import RepositoryDetail from "./RepositoryDetail";

class RepositoryList extends Component {
  render() {
    const repos = [1, 2, 3, 4, 5];
    return (
      <div>
        {repos.map((repo) => {
          return <RepositoryDetail repo={repo} />;
        })}
      </div>
    );
  }
}

export default RepositoryList;
