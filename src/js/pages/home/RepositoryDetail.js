import React, { Component } from "react";
import moment from "moment";
import newIcon from "../../../img/new.png";
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
      <div className="repository-detail" onClick={this.selectRepository}>
        {userId in repo.seenUsers ? null : (
          <img className="new-icon" src={newIcon} alt="" />
        )}
        {console.log(userId in repo.seenUsers)}
        <span>{repo.repo} </span>
        <span>@{repo.owner}</span>
        <p>Last Release: {repo.tagName} </p>
        <p>Date: {moment(repo.publishedAt).calendar()}</p>
      </div>
    );
  }
}

export default RepositoryDetail;
