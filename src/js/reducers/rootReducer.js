import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  repository: repositoryReducer,
});

export default rootReducer;
