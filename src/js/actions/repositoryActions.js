import { ADD_REPO_SUCCESS, ADD_REPO_ERROR } from "../constants/repoActionTypes";

export const addRepository = (owner, repo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("repositories")
      .add({
        owner,
        repo,
        createdAt: new Date(),
      })
      .then(() => {
        console.log("yes");
        dispatch({ type: ADD_REPO_SUCCESS, repo: { owner, repo } });
      })
      .catch((err) => {
        console.log("no");
        dispatch({ type: ADD_REPO_ERROR, repo: { owner, repo } });
      });
  };
};
