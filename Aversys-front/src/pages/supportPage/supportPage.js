import { Button, Form, Input, Select, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { userAsk, userPermission } from "../../redux/reducers/supportReducer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SpinnerComponent from "../../components/spinner/SpinnerComponent";
import style from "./style.module.scss";
import ImageNavigation from "../../components/navImages/ImageNavigation";
import ListOfQuestions from "../../components/listOfQuestions/listOfQuestions";

const SupportPage = () => {
  const [checkForSpace, setCheckForSpace] = useState(false);
  const dispatch = useDispatch();
  const spinnerStatus = useSelector((state) => {
    return state.spinnerStatus.status;
  });
  const navigation = useNavigate();
  useEffect(() => {
    dispatch(userPermission(navigation));
  }, [dispatch, navigation]);
  const [form] = Form.useForm();

  return (
    <div className={style.SupportPage}>
      <div className={style.leftDisplaySpace}>
        <div className={style.backGroundBlock}>
          <div className={style.infoTextBlock}>
            <p className={style.logoText}>AVERSYS</p>
            <p className={style.subText}>Поддержка</p>
            <p className={style.infoText}>
              На странице поддержки вы можете обратиться с возникшими у вас
              вопросами, а так же найти ответ на них в поле "Часто задаваемые
              вопросы"
            </p>
            <div className={style.imageNavigation}>
              <ImageNavigation />
            </div>
          </div>
        </div>
      </div>
      <div className={style.rightDisplaySpace}>
        <div className={style.faqBlock}>
          <div className={style.contentBlock}>
            <p className={style.rightText}>Часто задаваемые вопросы</p>
            <div className={style.listOfQuestions}>
              <span className={style.innerBox}>
                <ListOfQuestions />
              </span>
            </div>
            <p className={style.rightText}>Задайте свой вопрос</p>
            <Form
              form={form}
              className={style.questionForm}
              onFinish={(supportData) => {
                if (Object.values(supportData).includes(undefined)) {
                  setCheckForSpace(true);
                } else {
                  dispatch(userAsk(supportData));
                  if (!checkForSpace) {
                    form.resetFields();
                  }
                }
              }}
            >
              <Tooltip
                placement="rightTop"
                color="#A62F00"
                open={checkForSpace}
                title={"Необходимо заполнить все поля"}
              ></Tooltip>
              <Form.Item name="title" className={style.inputForm}>
                <Input placeholder="Введите тему вопроса" />
              </Form.Item>
              <Form.Item name="description" className={style.inputForm}>
                <Input placeholder="Напишите вопрос" />
              </Form.Item>
              <Form.Item name="typeOfReport">
                <Select
                  style={{ width: 220 }}
                  options={[
                    {
                      value: "ui",
                      label: "Пользовательский интерфейс",
                    },
                    {
                      value: "technical",
                      label: "Технический вопрос",
                    },
                    {
                      value: "bug",
                      label: "Ошибки в работе сервиса",
                    },
                    {
                      value: "other",
                      label: "Другое",
                    },
                  ]}
                />
              </Form.Item>
              <Button htmlType="submit" className={style.buttonWrapper}>
                {spinnerStatus ? <SpinnerComponent /> : "Отправить"}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
