import style from "./style.module.scss";

const MonitorInfo = ({ monitorInfo, pingMs }) => {
  return (
    <div className={style.monitorContainer}>
      <div className={style.monitorContainer_item}>
        <span>Количество пользователей в системе: {monitorInfo.userCount}</span>
      </div>
      <div className={style.monitorContainer_item}>
        <span>
          Количество запросов,обработанных сервером за последний час:{" "}
          {monitorInfo.countQoueryesPerHour}
        </span>
      </div>
      <div className={style.monitorContainer_item}>
        <span>Ping: {pingMs}ms</span>
      </div>
    </div>
  );
};

export default MonitorInfo;
