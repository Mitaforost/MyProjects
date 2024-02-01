import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../redux/reducers/autorizationData";
import { activateSpinner } from "../../redux/reducers/spinnerReducer";
import { AUTORIZATIONTYPE } from "../../variables/formTypes";
import SpinnerComponent from "../spinner/SpinnerComponent";
import style from "./style.module.scss";
import { imagesAuthorized } from "../../images/imagesConfig";
import { useState } from "react";

const Uform = (formType) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const errorStatus = useSelector((state) => {
    return state.errorList.errorStatus;
  });
  const spinnerStatus = useSelector((state) => {
    return state.spinnerStatus.status;
  });
  if (formType === AUTORIZATIONTYPE) {
    return (
      <div className={style.loginFormBlock}>
        <Form
          className={style.formStyles}
          onFinish={(loginData) => {
            dispatch(userLogin(loginData, navigation));
          }}
        >
          <Form.Item name="login">
            <Input
              status={errorStatus && "error"}
              placeholder="Введите логин"
            />
          </Form.Item>
          <Form.Item name="password">
            <div>
              <Input
                className={style.passwordInput}
                status={errorStatus && "error"}
                type={!isPasswordVisible ? "password" : "text"}
                placeholder="Введите пароль"
              />
              <div
                className={style.inputEye}
                onClick={() => {
                  setIsPasswordVisible((prev) => !prev);
                }}
              >
                <img
                  alt="sdsdss"
                  src={
                    !isPasswordVisible
                      ? imagesAuthorized.hideEye
                      : imagesAuthorized.viewEye
                  }
                />
              </div>
            </div>
          </Form.Item>

          <Button
            type="ghost"
            htmlType="submit"
            onClick={() => {
              dispatch(activateSpinner());
            }}
          >
            {spinnerStatus ? <SpinnerComponent /> : "Вход"}
          </Button>
        </Form>
      </div>
    );
  }
  // else if (formType === REGISTERTYPE) {
  //   return (
  //     <div className={style.registerFormBlock}>
  //       <Form
  //         onFinish={(data) => {
  //           data.age = +data.age;
  //           if (!politicState) {
  //             setPoliticMessage(true);
  //           } else {
  //             if (data.password.includes(" ") || data.login.includes(" ")) {
  //               setCheckForSpace(true);
  //             } else {
  //               dispatch(checkRegisterRequest(data, navigation));
  //             }
  //           }
  //         }}
  //       >
  //         {/* {errorStatus ? <AlertMessage /> : null} */}
  //         <Form.Item name="firstname">
  //           <Input placeholder="Имя" />
  //         </Form.Item>
  //         <Form.Item name="lastname">
  //           <Input placeholder="Фамилия" />
  //         </Form.Item>
  //         <Form.Item name="middlename">
  //           <Input placeholder="Отчество" />
  //         </Form.Item>
  //         <Form.Item name="email">
  //           <Input placeholder="Ваша электронная почта" />
  //         </Form.Item>
  //         <Form.Item name="phone">
  //           {/* <Input status={errorStatus && "error"} placeholder="телефон" /> */}
  //         </Form.Item>
  //         <Form.Item name="age">
  //           <Input
  //             type="age"
  //             // status={errorStatus && "error"}
  //             placeholder="возраст"
  //           />
  //         </Form.Item>
  //         <Form.Item name="competence">
  //           {/* <Input status={errorStatus && "error"} placeholder="должность" /> */}
  //         </Form.Item>
  //         <Tooltip
  //           color="#A62F00"
  //           placement="rightTop"
  //           open={checkForSpace}
  //           title={"Пробелы недопустимы в полях логина и пароля"}
  //         >
  //           <Form.Item name="login">
  //             <Input
  //               status={checkForSpace && "error"}
  //               spellCheck="true"
  //               placeholder="Логин"
  //             />
  //           </Form.Item>
  //         </Tooltip>
  //         <Tooltip
  //           placement="rightTop"
  //           color="#A62F00"
  //           open={checkForSpace}
  //           title={"Пробелы недопустимы в полях логина и пароля"}
  //         >
  //           <Form.Item name="password">
  //             <Input
  //               status={checkForSpace && "error"}
  //               type="password"
  //               placeholder="Пароль"
  //             />
  //           </Form.Item>
  //         </Tooltip>
  //         <div className={style.politicBlock}>
  //           <Tooltip
  //             placement="bottom"
  //             color="#A62F00"
  //             open={politicMessage}
  //             title={"Необходимо ознакомиться с политикой конфиденциальности"}
  //           >
  //             <Checkbox
  //               checked={politicState}
  //               onChange={() => {
  //                 setPoliticState(!politicState);
  //               }}
  //               autoFocus={false}
  //               className={style.checkbox}
  //             />
  //           </Tooltip>
  //           <p className={style.politicText}>
  //             Я ознакомлен(а) с <span>Политикой конфиденциальности</span> и
  //             принимаю правила пользования
  //           </p>
  //         </div>
  //         <Button type="primary" htmlType="submit">
  //           Отправить
  //         </Button>
  //       </Form>
  //     </div>
  //   );
  // }
};

export default Uform;
