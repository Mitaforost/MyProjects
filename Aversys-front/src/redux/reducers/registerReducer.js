import { createSlice } from "@reduxjs/toolkit";
import SimpleRequest from "../../api/commonRequest";
import { root } from "../../api/root_api";
import { disableError } from "./errorList";

const initialState = {
  registerInfo: {},
  registerStepState: 0,
};

export const registerReducer = createSlice({
  name: "registerData",
  initialState,
  reducers: {
    createRegisterState: (state, action) => {
      state.registerInfo = action.payload.data;
    },
  },
});

export const checkRegisterRequest = (incData, navigation) => (dispatch) => {
  SimpleRequest({
    url: root.REGISTER,
    req_cfg: {
      data: incData,
      method: "post",
    },
    redux_cfg: {
      dispatch: dispatch,
      action: [createRegisterState, disableError],
    },
    postCallBack: () => {
      navigation("/autorized");
    },
  });
};

export const { createRegisterState } = registerReducer.actions;
export default registerReducer.reducer;
