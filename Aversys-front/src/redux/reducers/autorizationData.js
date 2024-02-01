import { createSlice } from "@reduxjs/toolkit";
import SimpleRequest from "../../api/commonRequest";
import { root } from "../../api/root_api";
import { disableError } from "./errorList";

const initialState = {
  userData: {},
};

export const autorizationDataReducer = createSlice({
  name: "autorizationData",
  initialState,
  reducers: {
    appropriation: (state, action) => {
      state.userData = action.payload.data;
    },
    logOut: (state) => {
      state.userData = {};
    },
  },
});

export const userLogin = (incData, navigation) => (dispatch) => {
  SimpleRequest({
    url: root.LOGIN,
    req_cfg: {
      data: incData,
      method: "post",
    },
    redux_cfg: {
      dispatch: dispatch,
      action: [disableError],
    },
    preCallBack: () => {
      localStorage.removeItem("auth_token");
    },
  }).then(({ data }) => {
    navigation("/persArea");
    localStorage.setItem("auth_token", data.data.user.token);
  });
};

export const userLogout = (navigation) => (dispatch) => {
  SimpleRequest({
    url: root.LOGOUT,
    redux_cfg: {
      dispatch: dispatch,
      action: [logOut],
    },
    postCallBack: () => {
      navigation("/autorized");
    },
  }).then(() => {
    localStorage.removeItem("auth_token");
  });
};

export const getUserInfo = (navigation) => (dispatch) => {
  SimpleRequest(
    {
      url: root.ME,
      redux_cfg: {
        dispatch: dispatch,
        action: [appropriation],
      },
    }
    // (data) => {
    //   data.status || (data.response.status >= 400 && navigation("/autorized"));
    // }
  );
};
export const { appropriation, logOut } = autorizationDataReducer.actions;
export default autorizationDataReducer.reducer;
