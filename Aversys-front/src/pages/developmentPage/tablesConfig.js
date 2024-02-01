import style from "./style.module.scss";
import { Tag } from "antd";

export const genericLogsTableSchema = (handleUserLinkClick) => {
  return [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "sendBy",
      dataIndex: "sendBy",
      key: "sendBy",
      render: (text) => (
        <span
          onClick={(e) => handleUserLinkClick(e, text)}
          className={style.userLink}
        >
          {text}
        </span>
      ),
    },
    {
      title: "headers",
      dataIndex: "headers",
      key: "headers",
    },
    {
      title: "body",
      key: "body",
      dataIndex: "body",
    },
    {
      title: "method",
      key: "method",
      dataIndex: "method",
    },
    {
      title: "context",
      key: "context",
      dataIndex: "context",
    },
    {
      title: "createdAt",
      key: "createdAt",
      dataIndex: "createdAt",
    },
  ];
};

export const genericUsersTableSchema = (handleUserLinkClick) => {
  return [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      render: (text) => (
        <span
          onClick={(e) => handleUserLinkClick(e, text)}
          className={style.userLink}
        >
          {text}
        </span>
      ),
    },
    {
      title: "photo",
      dataIndex: "photo",
      key: "photo",
      render: (data) =>
        !!data ? (
          <img
            style={{ width: "150px", height: "150px", borderRadius: "100%" }}
            src={data}
            alt=""
          />
        ) : (
          "no data"
        ),
    },
    {
      title: "firstname",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "middlename",
      key: "middlename",
      dataIndex: "middlename",
    },
    {
      title: "lastname",
      key: "lastname",
      dataIndex: "lastname",
    },
    {
      title: "email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "phone",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "login",
      key: "login",
      dataIndex: "login",
    },
    {
      title: "age",
      key: "age",
      dataIndex: "age",
    },
    {
      title: "competence",
      key: "competence",
      dataIndex: "competence",
    },
    {
      title: "createdAt",
      key: "createdAt",
      dataIndex: "createdAt",
    },
  ];
};

export const genericUsersReportsSchema = (
  handleReportIdClick,
  handleUserLinkClick
) => {
  return [
    {
      title: "status",
      key: "status",
      dataIndex: "status",
      render: (text) => (
        <Tag color={text === "resolved" ? "green" : "red"} key={text}>
          {text.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      render: (text) => (
        <span
          onClick={(e) => handleReportIdClick(e, text)}
          className={style.userLink}
        >
          {text}
        </span>
      ),
    },
    {
      title: "typeOfReport",
      dataIndex: "typeOfReport",
      key: "typeOfReport",
    },
    {
      title: "title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "description",
      key: "description",
      dataIndex: "description",
    },
    {
      title: "createdAt",
      key: "createdAt",
      dataIndex: "createdAt",
    },
    {
      title: "createdBy",
      key: "createdBy",
      dataIndex: "createdBy",
      render: (text) => (
        <span
          onClick={(e) => handleUserLinkClick(e, text)}
          className={style.userLink}
        >
          {text}
        </span>
      ),
    },
  ];
};

export const genericAdminsTableSchema = (handleUserLinkClick) => {
  return [
    {
      title: "id",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "userId",
      key: "userId",
      dataIndex: "userId",
      render: (text) => (
        <span
          onClick={(e) => handleUserLinkClick(e, text)}
          className={style.userLink}
        >
          {text}
        </span>
      ),
    },
  ];
};
