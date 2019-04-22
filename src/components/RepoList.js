import React, { Component } from "react";
import axios from "axios";
import { getRepo } from "../actions/GetRepo";
import { connect } from "react-redux";
import Moment from "react-moment";
import "moment-timezone";
import "../styles/RepoList.css";

class RepoList extends Component {
  componentDidMount() {
    getRepo();
  }
  render() {
    return (
      <div>
        <div className="overview">
          <button className="overviewButton">Overview</button>
          <button>Repositories</button>
          <button>Projects</button>
          <button>Stars</button>
          <button>Followers</button>
          <button>Following</button>
        </div>
        <div className="findRepo">
          <input
            type="text"
            placeholder="Find a repository..."
            className="findRepoSearch"
          />
          <button className="typeButton">Type:All</button>
          <button className="lButton">Language</button>
          <button className="nButton">New</button>
        </div>
        <ul className="repoList">
          {this.props.items.map(repo => (
            <li>
              <div className="repoContainer">
                <div className="topLayer">
                  <p className="repoName">{repo.name}</p>
                  <button className="starButton">Star</button>
                </div>
                <p className="repoLanguage">{repo.language}</p>
                <p className="lastUpdated">{repo.updated_at}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(appState) {
  return {
    items: appState.repos
  };
}

export default connect(mapStateToProps)(RepoList);
