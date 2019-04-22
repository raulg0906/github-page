const initialState = {
  repos: [],
  user: []
};

export default function getRepoReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_REPO":
      return { ...state, repos: action.repos };

    case "GET_USER":
      return { ...state, user: action.user };
    default:
      return state;
  }
}
