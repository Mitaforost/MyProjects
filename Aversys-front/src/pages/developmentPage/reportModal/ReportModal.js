import { Alert, Button, Modal, Spin } from "antd";
import style from "./style.module.scss";
import TextArea from "antd/lib/input/TextArea";
import { LoadingOutlined } from "@ant-design/icons";
import React from "react";

const ReportModal = ({
  error,
  handleReportModalOk,
  handleReportModalCancel,
  isReportModalOpen,
  currentReport,
  handleSendMessageClick,
  textAreaRef,
}) => {
  return (
    <Modal
      width={1000}
      onOk={handleReportModalOk}
      onCancel={handleReportModalCancel}
      open={isReportModalOpen}
      title={`Тема вопроса - ${currentReport.title}`}
      footer={[
        <div className={style.modalFooter}>
          <TextArea ref={textAreaRef}></TextArea>
          <Button
            size="large"
            type="primary"
            shape="round"
            className={style.modalFooterBtn}
            onClick={(e) => handleSendMessageClick(e)}
          >
            Send
          </Button>
        </div>,
      ]}
    >
      {Object.keys(currentReport).length > 0 ? (
        <div
          id="messageBlockScrollContainer"
          className={style.messagesContainer}
        >
          {currentReport.messages.map((el, index) => {
            return (
              <div
                key={index}
                className={
                  el.receiverId === "ADMIN"
                    ? style.userMessage
                    : style.adminMessage
                }
              >
                <div
                  className={
                    el.receiverId === "ADMIN"
                      ? style.userMessageInner
                      : style.adminMessageInner
                  }
                >
                  {el.receiverId !== "ADMIN" && (
                    <div className={style.adminSign}>administrator</div>
                  )}
                  <div className={style.messageText}>{el.messageText}</div>
                  <div className={style.messageDate}>
                    {new Date(el.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>
            );
          })}
          <div
            id="lastMessageElement"
            className={style.lastMessageElement}
          ></div>
        </div>
      ) : !error ? (
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
      ) : (
        <Alert
          message={`${error.status}`}
          description={`${error.errorText}`}
          type="error"
        />
      )}
    </Modal>
  );
};

export default ReportModal;
