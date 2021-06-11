const initState = {
  repositories: [],
  currentIndex: 0, //use this to track currently clicked repo
};
const repositoryReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_REPO_SUCCESS":
      return Object.assign({}, state, {
        repositories: [...state.repositories, action.repo],
      });
    case "ADD_REPO_ERROR":
      console.log(action.err);
      return state;
    default:
      return state;
  }
};

export default repositoryReducer;
