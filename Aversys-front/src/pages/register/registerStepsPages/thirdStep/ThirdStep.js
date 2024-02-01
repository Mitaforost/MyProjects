import { Button, Checkbox, Form, Input, message, Tooltip } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { checkRegisterRequest } from "../../../../redux/reducers/registerReducer";
import { activateSpinner } from "../../../../redux/reducers/spinnerReducer";
import SpinnerComponent from "../../../../components/spinner/SpinnerComponent";
import style from "./style.module.scss";
const ThirdStep = ({ setFormData, increaseStep }) => {
  const dispatch = useDispatch();
  const [politicState, setPoliticState] = useState(false);
  const [checkForSpace, setCheckForSpace] = useState(false);
  const [politicMessage, setPoliticMessage] = useState(false);
  const errorStatus = useSelector((state) => {
    return state.errorList.errorStatus;
  });
  const navigation = useNavigate();
  const spinnerStatus = useSelector((state) => {
    return state.spinnerStatus.status;
  });
  return (
    <div className={style.thirdStepBlock}>
      <div>
        <Form
          onFinish={(data) => {
            setFormData((prev) => {
              if (Object.values(data).includes(undefined)) {
                setCheckForSpace(true);
              } else {
                if (!politicState) {
                  setPoliticMessage(true);
                } else {
                  if (data.password.includes(" ") || data.login.includes(" ")) {
                    setCheckForSpace(true);
                  } else {
                    dispatch(
                      checkRegisterRequest({ ...prev, ...data }, navigation)
                    );
                    return { ...prev, ...data };
                  }
                }
              }
            });
          }}
        >
          <Form.Item name="login">
            <Input placeholder="Логин" />
          </Form.Item>
          <Form.Item name="password">
            <Input type="password" placeholder="Пароль" />
          </Form.Item>
          <Form.Item name="secretQuestion">
            <Input placeholder="Секретный вопрос" />
          </Form.Item>
          <Form.Item name="answer">
            <Input placeholder="Ответ" />
          </Form.Item>
          <div className={style.politicBlock}>
            <Tooltip
              placement="rightTop"
              color="#A62F00"
              open={checkForSpace}
              title={"Необходимо заполнить все поля"}
            ></Tooltip>
            <Tooltip
              placement="bottom"
              color="#A62F00"
              title={"Необходимо ознакомиться с политикой конфиденциальности"}
              open={politicMessage}
            ></Tooltip>
            <Checkbox
              checked={politicState}
              onChange={() => {
                setPoliticState(!politicState);
              }}
              autoFocus={false}
              className={style.checkbox}
            />
            <div className={style.politicText}>
              Я ознакомлен(а) с <span>Политикой конфиденциальности</span> и
              принимаю правила пользования
            </div>
          </div>
          <p>*Нажмите кнопку “Далее”, чтобы перейти к следующему шагу.</p>
          <div className={style.buttonBlock}>
            <Button
              type="infoColor"
              onClick={() => {
                increaseStep(1);
              }}
            >
              Назад
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => {
                dispatch(activateSpinner());
                if (
                  errorStatus &&
                  !politicMessage &&
                  !checkForSpace &&
                  politicState
                ) {
                  message.success("Регистрация успешно завершена");
                }
              }}
            >
              {spinnerStatus ? <SpinnerComponent /> : "Далее"}
            </Button>
          </div>
        </Form>
      </div>
      <div className={style.autorizeLink}>
        Уже зарегестрированы?
        <span>
          <Link to="/autorized">Войти</Link>
        </span>
      </div>
    </div>
  );
};

export default ThirdStep;
