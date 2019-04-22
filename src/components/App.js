import React, { Component } from "react";
import "../styles/base.css";
import { Provider } from "react-redux";
import store from "../store";
import Navbar from "./Navbar";
import Profile from "./Profile";
import RepoList from "./RepoList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <div className="container">
            <Profile />
            <RepoList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
