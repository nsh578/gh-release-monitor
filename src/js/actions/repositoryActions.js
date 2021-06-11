import {
  ADD_REPO_SUCCESS,
  ADD_REPO_ERROR,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  SELECT_REPO_SUCCESS,
  SELECT_REPO_ERROR,
} from "../constants/repoActionTypes";
import { getLatestRelease } from "../helpers/getLatestRelease";

export const addRepository = (owner, repo) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const repoId = owner + "@" + repo;
    const userId = getState().firebase.auth.uid;

    //TODO: early return when repo is already added.
    //TODO: When error, check whether repo exists
    let latestRelease = await getLatestRelease(owner, repo, dispatch);

    if (!latestRelease) return;

    //TODO: Should try retrieving first and build this. (update seen users)
    const repoData = {
      owner,
      repo,
      releaseBody: latestRelease.data.body,
      author: latestRelease.data.author.login,
      name: latestRelease.data.name,
      url: latestRelease.url,
      publishedAt: latestRelease.data.published_at,
      tagName: latestRelease.data.tag_name,
      seenUsers: [],
    };
    console.log(userId);
    firestore
      .collection("repositories")
      .doc(repoId)
      .set(repoData)
      .then(() => {
        console.log("updated repo");
        firestore
          .collection("users")
          .doc(userId)
          .update({
            repos: firestore.FieldValue.arrayUnion(repoId),
          })
          .then(() => {
            console.log("updated users");
            dispatch({ type: ADD_REPO_SUCCESS, repo: repoData });
          })
          .catch((err) => {
            console.log(err);
            dispatch({ type: ADD_REPO_ERROR, err });
          });
      })
      .catch((err) => {
        dispatch({ type: ADD_REPO_ERROR, err });
      });
  };
};

export const loadRepositories = () => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    let doc = await firestore.collection("users").doc(userId).get();

    let repositories = [];
    await Promise.all(
      doc.data().repos.map(async (repo) => {
        await firestore
          .collection("repositories")
          .doc(repo)
          .get()
          .then((docRef) => {
            repositories.push(docRef.data());
          });
      })
    );
    dispatch({ type: LOAD_REPOS_SUCCESS, repositories });
    return null;
  };
};

export const reloadRepositories = (repositories) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    // let repos = await Promise.all(
    //   repositories.map(async (repo) => {
    //     const repo = await
    //   })
    // )
    return null;
  };
};

export const selectRepository = (ind) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    dispatch({ type: SELECT_REPO_SUCCESS, ind });
    return null;
  };
};
