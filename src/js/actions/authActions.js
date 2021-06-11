import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_STARTED,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from "../constants/authActionTypes";

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: LOGIN_STARTED });
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_ERROR,
          err,
        });
      });
  };
};

export const signUp = (newUser) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: SIGNUP_STARTED });
    const firebase = getFirebase();
    const firestore = getFirestore();

    if (newUser.email.length === 0) {
      dispatch({ type: SIGNUP_ERROR, err: "Please enter your email" });
      return;
    }

    if (newUser.password.length === 0) {
      dispatch({ type: SIGNUP_ERROR, err: "Please enter your password" });
      return;
    }

    if (newUser.password !== newUser.passwordCheck) {
      dispatch({
        type: SIGNUP_ERROR,
        err: "Passwords do not match",
      });
      return;
    }

    let uid = null;
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        uid = resp.user.uid;
        return firestore.collection("users").doc(uid).set({
          repos: [],
          createdAt: new Date(),
        });
      })
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          dispatch({
            type: SIGNUP_ERROR,
            err: "There is an existing acccount with this email",
          });
        } else {
          dispatch({
            type: SIGNUP_ERROR,
            err: "Please try again later",
          });
        }
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      });
  };
};
