import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};
const spinnerReducer = createSlice({
  name: "spinnerReducer",
  initialState,
  reducers: {
    activateSpinner: (state) => {
      state.status = true;
    },
    deactivateSpinner: (state) => {
      state.status = false;
    },
  },
});

export const { activateSpinner, deactivateSpinner } = spinnerReducer.actions;
export default spinnerReducer.reducer;
