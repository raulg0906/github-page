import React, { Component } from "react";
import axios from "axios";
import { getUser } from "../actions/GetRepo";
import { connect } from "react-redux";
import "../styles/Profile.css";

class Profile extends Component {
  componentDidMount() {
    getUser();
  }
  render() {
    return (
      <div className="profileContainer">
        <ul className="profileList">
          {this.props.items.map(user => (
            <li>
              <div>
                <div className="profile">
                  <img className="picture" src={user.avatar_url} />
                  <span className="setStatus">Set your status</span>
                </div>
                <p className="loginName">{user.login}</p>
                <button className="editButton">Edit</button>
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
    items: appState.user
  };
}

export default connect(mapStateToProps)(Profile);
