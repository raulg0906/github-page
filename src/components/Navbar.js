import React, { Component } from "react";
import "../styles/Navbar.css";
import gitlogo from "../assets/logo.png";
class Navbar extends Component {
  render() {
    return (
      <div className="topbar">
        <img alt="logo" className="logo" src={gitlogo} />
        <input
          className="searchbar"
          type="text"
          placeholder="Search or jump to..."
        />
        <button className="button">Pull Requests</button>
        <button className="button">Issues</button>
        <button className="button">Marketplace</button>
        <button className="button">Explore</button>
      </div>
    );
  }
}

export default Navbar;
