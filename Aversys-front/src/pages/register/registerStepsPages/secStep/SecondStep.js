import { Button, Form, Input, Tooltip } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
const SecondStep = ({ increaseStep, setFormData }) => {
  const [checkForSpace, setCheckForSpace] = useState(false);

  return (
    <div className={style.secondStepBlock}>
      <div>
        <Form
          onFinish={(data) => {
            if (Object.values(data).includes(undefined)) {
              setCheckForSpace(true);
            } else {
              setFormData((prev) => {
                return { ...prev, ...data };
              });
              increaseStep(2);
            }
          }}
        >
          <Tooltip
            placement="rightTop"
            color="#A62F00"
            open={checkForSpace}
            title={"Необходимо заполнить все поля"}
          >
            <Form.Item name="email">
              <Input placeholder="Электронная почта" />
            </Form.Item>
            <Form.Item name="country">
              <Input placeholder="Страна" />
            </Form.Item>
            <Form.Item name="phone">
              <Input placeholder="Номер мобильного телефона" />
            </Form.Item>
          </Tooltip>

          <p>*Нажмите кнопку “Далее”, чтобы перейти к следующему шагу.</p>
          <div className={style.buttonBlock}>
            <Button
              type="infoColor"
              onClick={() => {
                increaseStep(0);
              }}
            >
              Назад
            </Button>
            <Button type="primary" htmlType="submit">
              Далее
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

export default SecondStep;
