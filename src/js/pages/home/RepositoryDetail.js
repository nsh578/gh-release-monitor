import React, { Component } from "react";
import "./styles/RepositoryDetail.css";

class RepositoryDetail extends Component {
  selectRepository = () => {
    console.log(this.props.id);
    this.props.selectRepository(this.props.id);
  };

  render() {
    const repo = this.props.repo;
    if (!repo) return <div></div>;
    return (
      <div className="repository-detail" onClick={this.selectRepository}>
        <span>{repo.repo}</span>
        <span>{repo.owner}</span>
        <p>Last Release: {repo.tag_name} </p>
      </div>
    );
  }
}

export default RepositoryDetail;
