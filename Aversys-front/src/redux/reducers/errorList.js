import { createSlice } from "@reduxjs/toolkit";
import SimpleRequest from "../../api/commonRequest";
import { root } from "../../api/root_api";

const initialState = {
  errorStatus: false,
  currentError: {},
  errorListData: {},
};
export const errorListReducer = createSlice({
  name: "ErrorList",
  initialState,
  reducers: {
    activateError: (state, action) => {
      state.currentError = action.payload.response.data;
      state.errorStatus = true;
    },
    disableError: (state) => {
      state.errorStatus = false;
      state.currentError = null;
    },
    errorListCheck: (state, action) => {
      state.errorListData = action.payload.data;
    },
  },
});

export const getErrorsList = (dispatch) => {
  SimpleRequest({
    url: root.ERRORS,
    redux_cfg: {
      dispatch: dispatch,
      action: [errorListCheck],
    },
  });
};

export const { errorListCheck, activateError, disableError } =
  errorListReducer.actions;
export default errorListReducer.reducer;
