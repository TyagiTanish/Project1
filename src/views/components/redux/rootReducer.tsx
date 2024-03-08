import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";

const rootReducer = combineReducers({
  userReducer: userReducer,
  // Add other reducers here if you have more slices
});

export default rootReducer;
