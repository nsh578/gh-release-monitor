import React, { Component } from "react";
import "./styles/RepositoryDetail.css";

class RepositoryDetail extends Component {
  selectRepository = () => {
    const repoId = this.props.repo.owner + "@" + this.props.repo.repo;
    this.props.selectRepository(this.props.id, repoId);
  };

  render() {
    console.log(this.props.userId);
    const { userId, repo } = this.props;
    if (!repo) return <div></div>;
    console.log(repo.seenUsers);
    return (
      <div
        className="repository-detail"
        onClick={this.selectRepository}
        style={{ borderColor: userId in repo.seenUsers ? "black" : "red" }}
      >
        <span>{repo.repo}</span>
        <span>{repo.owner}</span>
        <p>Last Release: {repo.tag_name} </p>
      </div>
    );
  }
}

export default RepositoryDetail;
