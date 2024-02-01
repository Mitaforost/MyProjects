import { Descriptions, Modal, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import style from "./style.module.scss";
import React from "react";

const UserModal = ({
  handleUserModalOk,
  handleUserModalCancel,
  isUserModalOpen,
  isLogSpinnerActive,
  findedUser,
}) => {
  return (
    <Modal
      width={1400}
      onOk={handleUserModalOk}
      onCancel={handleUserModalCancel}
      open={isUserModalOpen}
      title="User preview"
    >
      {!isLogSpinnerActive ? (
        <div className={style.userModalContainer}>
          <img
            alt="not found"
            className={style.userModalImg}
            src={findedUser.photoBASE64}
          />
          <Descriptions title="User Info">
            {Object.entries(findedUser).map(
              (x) =>
                x[0] !== "photoBASE64" && (
                  <Descriptions.Item label={String(x[0])}>
                    {<span style={{ color: "#DC8900" }}>{x[1]}</span>}
                  </Descriptions.Item>
                )
            )}
          </Descriptions>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "60px",
          }}
        >
          <Spin size="large" indicator={<LoadingOutlined />} />
        </div>
      )}
    </Modal>
  );
};

export default UserModal;
