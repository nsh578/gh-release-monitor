import { ADD_REPO_SUCCESS } from "../constants/repoActionTypes";

export const addRepository = (owner, repo) => {
  return (dispatch, getState) => {
    //get repo info
    console.log(owner, repo);
    dispatch({ type: ADD_REPO_SUCCESS, repo: { owner, repo } });
  };
};
