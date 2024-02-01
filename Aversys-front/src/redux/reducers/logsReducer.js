import { createSlice } from "@reduxjs/toolkit";
import SimpleRequest from "../../api/commonRequest";
import { root } from "../../api/root_api";

const initialState = {
  usersLogs: {},
  queryLogs: {},
  ureportsLogs: {},
  findedUser: {},
  currentReport: {},
  monitorInfo: {},
  adminsList: [],
  pingMs: 0,
  isLogSpinnerActive: false,
  error: false,
};

export const logsReducer = createSlice({
  name: "logsList",
  initialState,
  reducers: {
    activateLogSpinner: (state, action) => {
      state.isLogSpinnerActive = true;
    },
    setMonitorInfo: (state, action) => {
      state.monitorInfo = action.payload.data;
      state.isLogSpinnerActive = false;
      state.error = false;
    },
    setCurrentReport: (state, action) => {
      state.currentReport = action.payload.data;
      state.isLogSpinnerActive = false;
      state.error = false;
    },
    setFindedUser: (state, action) => {
      state.findedUser = action.payload.data;
      state.isLogSpinnerActive = false;
      state.error = false;
    },
    setPing: (state, action) => {
      state.pingMs = action.payload;
      state.isLogSpinnerActive = false;
      state.error = false;
    },
    setQueryLogs: (state, action) => {
      state.queryLogs = action.payload.data.map((el, index) => ({
        ...el,
        key: index + 1,
        context: el.contextPath,
        headers: el.reqHeaders,
        body: el.reqBody,
        sendBy: el.sendBy,
        createdAt: new Date(el.createdAt).toLocaleString(),
      }));
      state.isLogSpinnerActive = false;
      state.error = false;
    },
    setUreportsLogs: (state, action) => {
      state.ureportsLogs = action.payload.data.map((el, index) => ({
        ...el,
        createdAt: new Date(el.createdAt).toLocaleString(),
        key: index + 1,
      }));
      state.isLogSpinnerActive = false;
      state.error = false;
    },
    setUserLogs: (state, action) => {
      state.usersLogs = action.payload.data.map((el, index) => ({
        ...el,
        key: index + 1,
        firstname: el.firstname,
        middlename: el.middlename,
        email: el.email,
        phone: el.phone,
        login: el.login,
        age: el.age,
        photo: el.photoBASE64,
        competence: el.competence,
        createdAt: new Date(el.createdAt).toLocaleString(),
      }));
      state.isLogSpinnerActive = false;
      state.error = false;
    },
    setError: (state, action) => {
      state.error = action.payload.response.data;
    },
    clearCurrentReportData: (state, action) => {
      state.currentReport = {};
      state.error = false;
    },
    setAdminsList: (state, action) => {
      state.adminsList = action.payload.data;
      console.log(action.payload);
      state.error = false;
    },
  },
});

export const getPingTime = (dispatch) => {
  dispatch(activateLogSpinner);
  let start = Date.now();
  SimpleRequest({
    url: root.PING,
  }).then(() => {
    dispatch(setPing(Date.now() - start));
  });
};

export const getMonitorInfo = (dispatch) => {
  dispatch(activateLogSpinner);
  SimpleRequest({
    url: root.MONITOR_INFO,
    redux_cfg: {
      dispatch: dispatch,
      action: [setMonitorInfo],
    },
  });
};

export const getQueryLogsList = (dispatch) => {
  dispatch(activateLogSpinner());
  SimpleRequest({
    url: root.QUERY_LOGS,
    redux_cfg: {
      dispatch: dispatch,
      action: [setQueryLogs],
    },
  });
};

export const getUsersLogsList = (dispatch) => {
  dispatch(activateLogSpinner());
  SimpleRequest({
    url: root.USER_LOGS,
    redux_cfg: {
      dispatch: dispatch,
      action: [setUserLogs],
    },
  });
};

export const getUsersReportsList = (dispatch) => {
  dispatch(activateLogSpinner());
  SimpleRequest({
    url: root.UREPORTS_ALL,
    redux_cfg: {
      dispatch: dispatch,
      action: [setUreportsLogs],
    },
  });
};

export const getUserById = (userId, dispatch) => {
  dispatch(activateLogSpinner());
  SimpleRequest({
    url: `${root.FIND_USER_BY_ID}?id=${userId}`,
    redux_cfg: {
      dispatch: dispatch,
      action: [setFindedUser],
    },
  });
};

export const getReportById = (reportId, dispatch) => {
  dispatch(activateLogSpinner());
  SimpleRequest({
    url: `${root.GET_REPORT_BY_ID}?reportId=${reportId}`,
    redux_cfg: {
      dispatch: dispatch,
      action: [setCurrentReport],
    },
  }).then((err) => dispatch(setError(err)));
};

export const getAdminsList = (dispatch) => {
  dispatch(activateLogSpinner());
  SimpleRequest({
    url: `${root.ADMINS_LIST}`,
    redux_cfg: {
      dispatch: dispatch,
      action: [setAdminsList],
    },
  });
};

export const {
  setQueryLogs,
  setUserLogs,
  setUreportsLogs,
  setFindedUser,
  setCurrentReport,
  setMonitorInfo,
  activateLogSpinner,
  setPing,
  setError,
  clearCurrentReportData,
  setAdminsList,
} = logsReducer.actions;

export default logsReducer.reducer;
