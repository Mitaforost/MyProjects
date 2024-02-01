export const HOST = "http://62.217.181.190:9876";
// export const HOST = "http://localhost:9876";

export const USER_ROOT = HOST + "/users";
export const DICTS_ROOT = HOST + "/dicts";
export const LOGS_ROOT = HOST + "/log";
export const UREPORTS_ROOT = HOST + "/ureports";
export const ADMINS_ROOT = HOST + "/admins";

export const root = {
  LOGIN: USER_ROOT + "/login",
  REGISTER: USER_ROOT + "/register",
  ME: USER_ROOT + "/me",
  ERRORS: DICTS_ROOT + "/errors",
  LOGOUT: USER_ROOT + "/logout",
  QUERY_LOGS: LOGS_ROOT + "/all",
  USER_LOGS: USER_ROOT + "/all",
  UREPORTS_ALL: UREPORTS_ROOT + "/all",
  FIND_USER_BY_ID: USER_ROOT + "/getById",
  GET_REPORT_BY_ID: UREPORTS_ROOT + "/getById",
  SEND_REPORT_MESSAGE: UREPORTS_ROOT + "/sendMessage",
  ASK_REPORT_MESSAGE: UREPORTS_ROOT + "/create",
  MONITOR_INFO: LOGS_ROOT + "/monitor",
  PING: LOGS_ROOT + "/ping",
  ADMINS_LIST: ADMINS_ROOT + "/all",
};
