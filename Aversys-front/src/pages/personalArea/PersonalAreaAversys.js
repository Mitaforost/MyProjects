import { Button, Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageNavigation from "../../components/navImages/ImageNavigation";
import { personalPageImage } from "../../images/imagesConfig";
import { getUserInfo, userLogout } from "../../redux/reducers/autorizationData";
import style from "./style.module.scss";

const PersonalAreaAversys = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const userDataInfo = useSelector((state) => {
    return state.autorizationData.userData;
  });
  useEffect(() => {
    dispatch(getUserInfo(navigation));
  }, [dispatch, navigation]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
  ];
  return (
    <div className={style.mainBlockPersArea}>
      <div className={style.userInterfaceHeader}>
        <h1>AVERSYS</h1>
        <span>Личный кабинет пользователя</span>
        <p>Добро пожаловать {userDataInfo.firstname}!</p>
      </div>
      <div className={style.userDataBlock}>
        <div className={style.userTableData}>
          <p>Последние активности</p>
          <img src={personalPageImage.arrowImg} alt="arrow not found" />
          <Table
            className={style.tableBlockStyle}
            pagination={false}
            columns={columns}
            dataSource={data}
            size="middle"
          />
        </div>
        <div className={style.userInfoBlock}>
          <img
            className={style.photoBASE64}
            src={userDataInfo.photoBASE64}
            alt="userImg not found"
          />
          <p>{userDataInfo.firstname}</p>
          <p>{userDataInfo.lastname}</p>
          <p>{userDataInfo.competence}</p>
          <span>
            Об организации <span>/ О пользователе</span>
          </span>
        </div>
      </div>
      <Button
        onClick={() => {
          dispatch(userLogout(navigation));
        }}
      >
        Выйти
      </Button>
      <ImageNavigation />
    </div>
  );
};

export default PersonalAreaAversys;
