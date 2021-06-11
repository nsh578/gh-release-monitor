import {
  ADD_REPO_SUCCESS,
  ADD_REPO_ERROR,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  SELECT_REPO_SUCCESS,
  SELECT_REPO_ERROR,
  RELOAD_REPOS_SUCCESS,
  RELOAD_REPOS_ERROR,
} from "../constants/repoActionTypes";
import { getLatestRelease } from "../helpers/getLatestRelease";

export const addRepository = (owner, repo, force = false) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const repoId = owner + "@" + repo;
    const userId = getState().firebase.auth.uid;
    console.log("hello");
    if (getState().repository.repoList.includes(repoId) && !force) return;

    //TODO: When error, check whether repo exists
    let latestRelease = await getLatestRelease(owner, repo, dispatch);
    if (!latestRelease) return;

    const repoData = {
      owner,
      repo,
      releaseBody: latestRelease.data.body,
      author: latestRelease.data.author.login,
      name: latestRelease.data.name,
      url: latestRelease.url,
      publishedAt: latestRelease.data.published_at,
      tagName: latestRelease.data.tag_name,
      seenUsers: {},
    };

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

    if (!doc.data()) return;

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
    dispatch({
      type: LOAD_REPOS_SUCCESS,
      repositories,
      repoList: doc.data().repos,
    });
    return null;
  };
};

export const reloadRepositories = (repositories) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    const repositories = getState().repository.repositories;

    let repos = await Promise.all(
      repositories.map(async (repo) => {
        const repoId = repo.owner + "@" + repo.repo;

        let latestRelease = await getLatestRelease(
          repo.owner,
          repo.repo,
          dispatch
        );
        if (latestRelease.url != repo.url) {
          //Force update if there is new release
          // await addRepository(repo.owner, repo.repo, true);
          const repoData = {
            owner: repo.owner,
            repo: repo.repo,
            releaseBody: latestRelease.data.body,
            author: latestRelease.data.author.login,
            name: latestRelease.data.name,
            url: latestRelease.url,
            publishedAt: latestRelease.data.published_at,
            tagName: latestRelease.data.tag_name,
            seenUsers: {},
          };
          firestore.collection("repositories").doc(repoId).set(repoData);
        }
      })
    );
    loadRepositories();
    dispatch({
      type: RELOAD_REPOS_SUCCESS,
    });
  };
};

export const selectRepository = (ind, repoId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    var seenUsers = {};
    seenUsers[userId] = true;

    firestore
      .collection("repositories")
      .doc(repoId)
      .update({
        seenUsers,
      })
      .then(() => {
        console.log("success");
        dispatch({ type: SELECT_REPO_SUCCESS, ind, userId });
      })
      .catch((err) => {
        dispatch({ type: SELECT_REPO_ERROR, err });
      });
    return null;
  };
};
