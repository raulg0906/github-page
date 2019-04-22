import store from "../store";
import axios from "axios";

export function getRepo() {
  axios.get("http://localhost:3001/Repos").then(resp => {
    console.log(resp.data);
    store.dispatch({
      type: "GET_REPO",
      repos: resp.data
    });
  });
}

export function getUser() {
  axios.get("http://localhost:3001/User").then(resp => {
    console.log(resp.data);
    store.dispatch({
      type: "GET_USER",
      user: resp.data
    });
  });
}
