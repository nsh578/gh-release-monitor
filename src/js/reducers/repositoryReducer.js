const initState = {
  repositories: [
    { repo: "vscode", owner: "ms" },
    { repo: "youtube", owner: "google" },
  ],
};
const repositoryReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_REPO_SUCCESS":
      return Object.assign({}, state, {
        repositories: [...state.repositories, action.repo],
      });
    default:
      return state;
  }
};

export default repositoryReducer;
