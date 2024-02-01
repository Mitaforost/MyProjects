import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import style from "./style.module.scss";
const SpinnerComponent = () => {
  const antIcon = <LoadingOutlined spin />;
  return (
    <div className={style.spinStyle}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default SpinnerComponent;
