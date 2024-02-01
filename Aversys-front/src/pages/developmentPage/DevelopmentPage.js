import React, { useEffect, useRef, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Empty, Spin, Table, Tabs } from "antd";
import style from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCurrentReportData,
  getAdminsList,
  getMonitorInfo,
  getPingTime,
  getQueryLogsList,
  getReportById,
  getUserById,
  getUsersLogsList,
  getUsersReportsList,
} from "../../redux/reducers/logsReducer";
import SimpleRequest from "../../api/commonRequest";
import { root } from "../../api/root_api";
import MonitorInfo from "./monitorInfo/MonitorInfo";
import {
  genericAdminsTableSchema,
  genericLogsTableSchema,
  genericUsersReportsSchema,
  genericUsersTableSchema,
} from "./tablesConfig";
import UserModal from "./userModal/UserModal";
import ReportModal from "./reportModal/ReportModal";

const DevelopmentPage = () => {
  const dispatch = useDispatch();
  const {
    usersLogs,
    queryLogs,
    ureportsLogs,
    monitorInfo,
    findedUser,
    currentReport,
    isLogSpinnerActive,
    adminsList,
    pingMs,
    error,
  } = useSelector((state) => state.logsData);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [currentInterval, setCurrentInterval] = useState(undefined);

  const textAreaRef = useRef();

  const handleUserLinkClick = (e, text) => {
    getUserById(text, dispatch);
    setIsUserModalOpen(true);
  };

  const handleUserModalOk = () => setIsUserModalOpen(false);
  const handleUserModalCancel = () => setIsUserModalOpen(false);

  const handleReportModalOk = () => setIsReportModalOpen(false);
  const handleReportModalCancel = () => {
    clearInterval(currentInterval);
    dispatch(clearCurrentReportData());
    setIsReportModalOpen(false);
  };

  const handleReportIdClick = (e, text) => {
    getReportById(text, dispatch);
    let inteervalId = setInterval(() => {
      getReportById(text, dispatch);
    }, 5000);
    setCurrentInterval(inteervalId);
    setIsReportModalOpen(true);
    setTimeout(() => {
      let lastElement = document.getElementById("lastMessageElement");
      lastElement.scrollIntoView();
    }, 700);
  };

  const handleSendMessageClick = async () => {
    await SimpleRequest({
      url: root.SEND_REPORT_MESSAGE,
      req_cfg: {
        method: "post",
        data: {
          messageText: textAreaRef.current.resizableTextArea.textArea.innerHTML,
          reportId: currentReport.id,
        },
      },
      postCallBack: (data) => {
        getReportById(data.data.reportId, dispatch);
        setTimeout(() => {
          let lastElement = document.getElementById("lastMessageElement");
          lastElement.scrollIntoView();
        }, 700);
      },
    });
  };

  useEffect(() => {
    dispatch(getMonitorInfo);
    dispatch(getPingTime);
  }, [dispatch]);

  return (
    <div className={style.container}>
      <Tabs
        onTabClick={(key) => {
          if (key === 1) {
            dispatch(getQueryLogsList);
          } else if (key === 2) {
            dispatch(getUsersLogsList);
          } else if (key === 3) {
            dispatch(getUsersReportsList);
          } else if (key === 4) {
            dispatch(getMonitorInfo);
            dispatch(getPingTime);
          } else if (key === 5) {
            dispatch(getAdminsList);
          }
        }}
        defaultActiveKey="1"
        type="card"
        size="small"
        items={[
          {
            label: "Monitor",
            key: 4,
            children:
              Object.values(monitorInfo).length > 0 && !!pingMs ? (
                <MonitorInfo monitorInfo={monitorInfo} pingMs={pingMs} />
              ) : isLogSpinnerActive ? (
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
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              ),
          },
          {
            label: "Queryes",
            key: 1,
            children:
              queryLogs.length > 0 ? (
                <Table
                  size="small"
                  scroll={{ x: true, y: 650 }}
                  bordered
                  columns={genericLogsTableSchema(handleUserLinkClick)}
                  dataSource={queryLogs}
                  // pagination={{ position: ["topRight"] }}
                />
              ) : isLogSpinnerActive ? (
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
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              ),
          },
          {
            label: "Users",
            key: 2,
            children:
              usersLogs.length > 0 ? (
                <Table
                  size="small"
                  scroll={{ x: true, y: 650 }}
                  bordered
                  columns={genericUsersTableSchema(handleUserLinkClick)}
                  dataSource={usersLogs}
                />
              ) : isLogSpinnerActive ? (
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
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              ),
          },
          {
            label: "UReports",
            key: 3,
            children:
              ureportsLogs.length > 0 ? (
                <Table
                  size="small"
                  bordered
                  scroll={{ x: true, y: 650 }}
                  columns={genericUsersReportsSchema(
                    handleReportIdClick,
                    handleUserLinkClick
                  )}
                  dataSource={ureportsLogs}
                />
              ) : isLogSpinnerActive ? (
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
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              ),
          },
          {
            label: "Administrators",
            key: 5,
            children:
              adminsList.length > 0 ? (
                <Table
                  size="small"
                  bordered
                  scroll={{ x: true, y: 650 }}
                  columns={genericAdminsTableSchema(handleUserLinkClick)}
                  dataSource={adminsList}
                />
              ) : isLogSpinnerActive ? (
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
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              ),
          },
        ]}
      />

      <UserModal
        handleUserModalOk={handleUserModalOk}
        handleUserModalCancel={handleUserModalCancel}
        isUserModalOpen={isUserModalOpen}
        isLogSpinnerActive={isLogSpinnerActive}
        findedUser={findedUser}
      />

      <ReportModal
        error={error}
        currentReport={currentReport}
        handleReportModalCancel={handleReportModalCancel}
        handleReportModalOk={handleReportModalOk}
        textAreaRef={textAreaRef}
        isReportModalOpen={isReportModalOpen}
        handleSendMessageClick={handleSendMessageClick}
      />
    </div>
  );
};

export default DevelopmentPage;
