import React, { Component } from "react";
import "./styles/RepositoryDetail.css";

class RepositoryDetail extends Component {
  render() {
    const repo = this.props.repo;
    return (
      <div className="repository-detail">
        <span>{repo.repo}</span>
        <span>{repo.owner}</span>
        <p>Last Release: {repo.tag_name} </p>
      </div>
    );
  }
}

export default RepositoryDetail;
