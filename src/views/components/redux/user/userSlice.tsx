import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "userReducer",
  initialState: {
    user: null,
    location:null
  },
  reducers: {
    userLogin: (state:any, action:any) => {
      state.user = action.payload;
    },
    userLogout: (state:any) => {
      state.user = null;
    },
    userLocation:(state:any,action:any) => {
      state.location = action.payload;
    }
  },
});
// Action creators
export const { userLogin, userLogout,userLocation } = userSlice.actions;
export default userSlice.reducer;
