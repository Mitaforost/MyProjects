import axios from "axios";
import { activateError } from "../redux/reducers/errorList";
import { deactivateSpinner } from "../redux/reducers/spinnerReducer";

async function SimpleRequest({
  url,
  req_cfg,
  redux_cfg,
  preCallBack,
  postCallBack,
}) {
  try {
    if (!!url && !req_cfg) {
      preCallBack && preCallBack();
      const data = await sendRequest({
        url: url,
        method: "get",
        ...req_cfg,
      });
      if (data.data.statusCode >= 400) {
        throw new Error(data.data);
      } else {
        redux_cfg &&
          redux_cfg.action.forEach((el) => redux_cfg.dispatch(el(data.data)));
        postCallBack && postCallBack(data.data);
        redux_cfg && redux_cfg.dispatch(deactivateSpinner());
        return data;
      }
    } else if (!!url && !!req_cfg) {
      preCallBack && preCallBack();
      const data = await sendRequest({ url: url, ...req_cfg });
      if (data.data.statusCode >= 400) {
        throw new Error(data.data);
      } else {
        redux_cfg &&
          redux_cfg.action.forEach((el) => redux_cfg.dispatch(el(data.data)));
        postCallBack && postCallBack(data.data);
        redux_cfg && redux_cfg.dispatch(deactivateSpinner());
        return data;
      }
    }
  } catch (err) {
    postCallBack && postCallBack(err);
    redux_cfg.dispatch(activateError(err));
    redux_cfg.dispatch(deactivateSpinner());
    return err;
  }
}

async function sendRequest(cfg) {
  return await axios({
    ...cfg,
    withCredentials: "true",
    headers: {
      auth_token: String(localStorage.getItem("auth_token")),
    },
  });
}

export default SimpleRequest;
