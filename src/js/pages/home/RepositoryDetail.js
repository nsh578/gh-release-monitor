import React, { Component } from "react";
import moment from "moment";
import "./styles/RepositoryDetail.css";

class RepositoryDetail extends Component {
  selectRepository = () => {
    const repoId = this.props.repo.owner + "@" + this.props.repo.repo;
    this.props.selectRepository(this.props.id, repoId);
  };

  render() {
    const { userId, repo } = this.props;
    if (!repo) return <div></div>;
    return (
      <div
        className="repository-detail"
        onClick={this.selectRepository}
        style={{ borderColor: userId in repo.seenUsers ? "black" : "red" }}
      >
        <span>{repo.repo} </span>
        <span>@{repo.owner}</span>
        <p>Last Release: {repo.tagName} </p>
        <p>Date: {moment(repo.publishedAt).calendar()}</p>
      </div>
    );
  }
}

export default RepositoryDetail;
