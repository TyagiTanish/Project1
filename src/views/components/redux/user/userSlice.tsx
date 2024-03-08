import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "userReducer",
  initialState: {
    user: null,
    location: null,
    locale: localStorage.getItem("locale") || "en",
    hotelId: null,
    RoomsAndGuests: [{ Room: 1, guest: 1 }],
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
    roomDetails: (state: any, action: any) => {
      state.roomDetails = action.payload;
    },
    searchDetails: (state: any, action: any) => {
      state.searchDetails = action.payload;
    },
    RoomsAndGuests: (state: any, action: any) => {
      state.RoomsAndGuests = action.payload;
    },
  },
});
// Action creators
export const {
  userLogin,
  userLogout,
  userLocation,
  locale,
  hotelId,
  roomDetails,
  searchDetails,
  RoomsAndGuests,
} = userSlice.actions;
export default userSlice.reducer;
