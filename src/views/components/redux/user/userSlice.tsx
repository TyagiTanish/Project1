import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "userReducer",
  initialState: {
    user: null,
    location: null,
    locale: localStorage.getItem("locale") || "en",
    hotelId: null,
    RoomsAndGuests: [{ Room: 1, guest: 1 }],
    date: null,
    start: null,
    end: null,
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
    date: (state: any, action: any) => {
      state.date = action.payload;
    },
    price: (state: any, action: any) => {
      state.price = action.payload;
    },
    category: (state: any, action: any) => {
      state.category = action.payload;
    },
    start: (state: any, action: any) => {
      state.start = action.payload;
    },
    end: (state: any, action: any) => {
      state.end = action.payload;
    },
    clearFilter: (state: any) => {
      state.price = [0, 37000];
      state.category = [];
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
  date,
  price,
  category,
  start,
  end,
  clearFilter,
} = userSlice.actions;
export default userSlice.reducer;
