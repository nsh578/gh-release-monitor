import React, { Component } from "react";
import RepositoryDetail from "./RepositoryDetail";

class RepositoryList extends Component {
  render() {
    return (
      <div>
        {this.props.repos.map((repo, i) => {
          console.log(i);
          return (
            <RepositoryDetail
              key={i}
              id={i}
              repo={repo}
              selectRepository={this.props.selectRepository}
            />
          );
        })}
      </div>
    );
  }
}

export default RepositoryList;
