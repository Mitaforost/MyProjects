import { createSlice } from "@reduxjs/toolkit";
import SimpleRequest from "../../api/commonRequest";
import { root } from "../../api/root_api";
import { disableError } from "./errorList";

const initialState = {
  userData: {},
};

export const supportDataReducer = createSlice({
  name: "supportData",
  initialState,
  reducers: {
    sendQuestion: (state, action) => {
      state.userData = action.payload.data;
    },
  },
});

export const userAsk = (incData) => (dispatch) => {
  SimpleRequest({
    url: root.ASK_REPORT_MESSAGE,
    req_cfg: {
      data: incData,
      method: "post",
    },
    redux_cfg: {
      dispatch: dispatch,
      action: [sendQuestion, disableError],
    },
  });
};

export const userPermission = (navigation) => (dispatch) => {
  SimpleRequest({
    url: root.ME,
    redux_cfg: {
      dispatch: dispatch,
      action: [sendQuestion],
    },
    postCallBack: (data) => {
      data.status || (data.response.status === 401 && navigation("/autorized"));
    },
  });
};

export const { sendQuestion } = supportDataReducer.actions;
export default supportDataReducer.reducer;
