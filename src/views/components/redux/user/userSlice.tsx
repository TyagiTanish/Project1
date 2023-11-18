import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "userReducer",
  initialState: {
    user: null,
  },
  reducers: {
    userLogin: (state:any, action:any) => {
      state.user = action.payload;
    },
    userLogout: (state:any) => {
      state.user = null;
    },
  },
});
// Action creators
export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
