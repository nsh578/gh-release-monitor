import React, { Component } from "react";
import "./styles/RepositoryDetail.css";

class RepositoryDetail extends Component {
  render() {
    return (
      <div className="repository-detail">
        <span>VS Code</span>
        <span>Microsoft</span>
        <p>Last Release: 1.0.2 </p>
      </div>
    );
  }
}

export default RepositoryDetail;
