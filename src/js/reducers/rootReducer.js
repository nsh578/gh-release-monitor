import authReducer from "./authReducer";
import repositoryReducer from "./repositoryReducer";
import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  repository: repositoryReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
