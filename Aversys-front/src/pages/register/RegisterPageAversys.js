import { Steps } from "antd";
import { useState } from "react";
import ImageNavigation from "../../components/navImages/ImageNavigation";
import FirstStep from "./registerStepsPages/firstStep/FirstStep";
import SecondStep from "./registerStepsPages/secStep/SecondStep";
import ThirdStep from "./registerStepsPages/thirdStep/ThirdStep";
import style from "./style.module.scss";
const RegisterPageAversys = () => {
  const step = 0;
  const [stepState, setStepState] = useState(step);
  const [registerFormData, setRegisterFormData] = useState();
  function customDot(dot) {
    return (
      <div className={style.customDotBlock}>
        <span className={style.customDot}>{dot}</span>
      </div>
    );
  }

  const steps = [
    {
      content: "First-content",
    },
    {
      content: "Second-content",
    },
    {
      content: "Last-content",
    },
  ];

  const items = steps.map((item) => ({
    title: item.title,
  }));
  return (
    <div>
      <div className={style.registerBlock}>
        <div>
          {(stepState === 0 && (
            <FirstStep increaseStep={setStepState} setFormData={setRegisterFormData} />
          )) ||
            (stepState === 1 && (
              <SecondStep increaseStep={setStepState} setFormData={setRegisterFormData} />
            )) ||
            (stepState === 2 && (
              <ThirdStep
                increaseStep={setStepState}
                setFormData={setRegisterFormData}
                formData={registerFormData}
              />
            ))}
        </div>
        <div className={style.progressBlock}>
          <h2>Регистрация пользователя</h2>
          <div className={style.registerLink}>
            <p>Зарегестрируйтесь и начните использовать все возможности</p>
            <span>AVERSYS</span>
          </div>
          <ImageNavigation />
          <Steps
            className={style.progressDot}
            current={stepState}
            items={items}
            progressDot={customDot}
          />
        </div>
      </div>
    </div>
  );
};
export default RegisterPageAversys;
