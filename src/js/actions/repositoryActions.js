import { ADD_REPO_SUCCESS, ADD_REPO_ERROR } from "../constants/repoActionTypes";
import { getLatestRelease } from "../helpers/getLatestRelease";

export const addRepository = (owner, repo) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    // const id = owner + "_" + repo;
    const id = "microsoft_vscode";

    //TODO: early return when repo is already added.
    //TODO: When error, check whether repo exists
    let latestRelease = await getLatestRelease("microsoft", "vscode", dispatch);

    if (!latestRelease) return;
    const repoData = {
      owner,
      repo,
      releaseBody: latestRelease.data.body,
      author: latestRelease.data.author.login,
      name: latestRelease.data.name,
      url: latestRelease.url,
      publishedAt: latestRelease.data.published_at,
      tag_name: latestRelease.data.tag_name,
    };
    console.log(latestRelease);
    firestore
      .collection("repositories")
      .doc(id)
      .set(repoData)
      .then(() => {
        dispatch({ type: ADD_REPO_SUCCESS, repo: repoData });
      })
      .catch((err) => {
        dispatch({ type: ADD_REPO_ERROR, err });
      });
  };
};

export const reloadRepositories = (repositories) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    //await Promise.all
    return null;
  };
};
