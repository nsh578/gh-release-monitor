import React, { Component } from "react";
import "./styles/ReleaseNote.css";

class ReleaseNote extends Component {
  render() {
    return (
      <div className="release-note-container">
        <h3>vscode 1.0.2 Release Notes</h3>
        <p>
          Welcome to the May 2021 release of Visual Studio Code. There are a
          number of updates in this version that we hope you will like, some of
          the key highlights include: Workspace Trust - Extra security against
          code execution when browsing unfamiliar source code. New Getting
          Started experience - Helps you quickly set up and learn about VS Code.
          Remote Repositories - Browse and edit code without locally cloning
          repositories. Terminal tabs - Tabs let you easily create, manage, and
          group multiple open terminals. Edge browser debugging - Integrates the
          Microsoft Edge Developer Tools directly into VS Code. JSDoc @link
          support - Add @link tags in your comments for fast symbol navigation.
          Go to Definition for non-code files - Quickly jump to images and
          stylesheets. Notebook API finalized - Notebook API for native notebook
          support in VS Code. VS Code at Build 2021 blog post - Catch up with
          on-demand sessions featuring VS Code. If you'd like to read these
          release notes online, go to Updates on code.visualstudio.com.
          Insiders: Want to try new features as soon as possible? You can
          download the nightly Insiders build and try the latest updates as soon
          as they are available.
        </p>
      </div>
    );
  }
}

export default ReleaseNote;
