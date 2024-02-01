import { Button, Form, Tooltip } from "antd";
import Input from "rc-input";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import UploadComponent from "../../../../components/uploadComponent/UploadComponent";

const FirstStep = ({ increaseStep, setFormData }) => {
  const [checkForSpace, setCheckForSpace] = useState(false);
  const [selectedPhotoBASE64, setSelectedPhotoBASE64] = useState(null);
  const [userNameInput, setUserNameInput] = useState(
    localStorage.getItem("userNameInput") || ""
  );
  // const [lastnameInput, setLastnameInput] = useState(
  //   localStorage.getItem("lastnameInput") || ""
  // );
  // const [middleNameInput, setmiddleNameInput] = useState(
  //   localStorage.getItem("middleNameInput") || ""
  // );
  // const [userCompetenceInput, setUserCompetenceInput] = useState(
  //   localStorage.getItem("userCompetenceInput") || ""
  // );
  // const [userAgeInput, setUserAgeInput] = useState(
  //   localStorage.getItem("userAgeInput") || ""
  // );

  return (
    <div className={style.firstStepBlock}>
      <div>
        <UploadComponent
          photoBASE64={selectedPhotoBASE64}
          setPhotoBASE64={setSelectedPhotoBASE64}
        />
        <Form
          onFinish={(data) => {
            if (Object.values(data).includes(undefined)) {
              setCheckForSpace(true);
            } else {
              data.age = +data.age;
              setFormData({ ...data, photoBASE64: selectedPhotoBASE64 });
              increaseStep(1);
            }
          }}
        >
          <Tooltip
            placement="rightTop"
            color="#A62F00"
            open={checkForSpace}
            title={"Необходимо заполнить все поля"}
          >
            <Form.Item name="firstname">
              <Input placeholder="Имя" />
            </Form.Item>
            <Form.Item name="lastname">
              <Input placeholder="Фамилия" />
            </Form.Item>
            <Form.Item name="middlename">
              <Input placeholder="Отчество" />
            </Form.Item>
            <Form.Item name="competence">
              <Input placeholder="Занимаемая должность" />
            </Form.Item>
            <Form.Item name="age">
              <Input placeholder="Возраст" />
            </Form.Item>
            <p>*Нажмите кнопку “Далее”, чтобы перейти к следующему шагу.</p>
          </Tooltip>
          <Button type="primary" htmlType="submit">
            Далее
          </Button>
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

export default FirstStep;
