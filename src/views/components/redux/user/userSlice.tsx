import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "userReducer",
  initialState: {
    user: null,
    location: null,
    locale: "en",
    hotelId: null,
  },
  reducers: {
    userLogin: (state: any, action: any) => {
      state.user = action.payload;
    },
    userLogout: (state: any) => {
      state.user = null;
    },
    userLocation: (state: any, action: any) => {
      state.location = action.payload;
    },
    locale: (state: any, action: any) => {
      state.locale = action.payload;
    },
    hotelId: (state: any, action: any) => {
      state.hotelId = action.payload;
    },
  },
});
// Action creators
export const { userLogin, userLogout, userLocation, locale, hotelId } =
  userSlice.actions;
export default userSlice.reducer;
