import { notification } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.scss";

const AlertMessage = () => {
  const currentError = useSelector((state) => {
    return state.errorList.currentError.errorText;
  });
  const checkConf = {
    message: currentError,
  };
  return (
    <div className={style.alertStyle}>{notification.error(checkConf)}</div>
  );
};
export default React.memo(AlertMessage);
