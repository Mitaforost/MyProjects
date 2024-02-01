import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLocationData: {},
};

export const userLocation = createSlice({
  name: "UserLocation",
  initialState,
  reducers: {
    getUserLocation: (state, action) => {
      state.userLocationData = action.payload;
    },
  },
});

export const { getUserLocation } = userLocation.actions;
export default userLocation.reducer;
