const initState = {
  repositories: [],
  repoList: [],
  currentIndex: 0, //use this to track currently clicked repo
};
const repositoryReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_REPOS_SUCCESS":
      return Object.assign({}, state, {
        repositories: action.repositories,
        repoList: action.repoList,
      });
    case "LOAD_REPOS_ERROR":
      console.log(action.err);
      return state;
    case "ADD_REPO_SUCCESS":
      return Object.assign({}, state, {
        repositories: [...state.repositories, action.repo],
      });
    case "ADD_REPO_ERROR":
      console.log(action.err);
      return state;
    case "RELOAD_REPOS_SUCCESS":
      console.log("reload success");
      return state;
    case "RELOAD_REPOS_ERROR":
      console.log("reload failed");
      return state;
    case "SELECT_REPO_SUCCESS":
      let repositories = state.repositories;
      repositories[action.ind].seenUsers[action.userId] = true;
      return Object.assign({}, state, {
        currentIndex: action.ind,
        repositories: [...repositories],
      });
    case "SELECT_REPO_ERROR":
      console.log(action.err);
      return state;
    default:
      return state;
  }
};

export default repositoryReducer;
