import { Link } from "react-router-dom";
import ImageNavigation from "../../components/navImages/ImageNavigation";
import Uform from "../../components/uForm/Uform";
import { AUTORIZATIONTYPE } from "../../variables/formTypes";
import style from "./style.module.scss";
const AutorizedAversys = () => {
  return (
    <div className={style.autorizedMainBlock}>
      <div className={style.loginBlock}>
        <h1>AVERSYS</h1>
        <span>Авторизация пользователя</span>
        {Uform(AUTORIZATIONTYPE)}
        <div className={style.registerBlock}>
          <Link to="/register">
            <span>Регистрация</span>
          </Link>
          <span>Забыли пароль?</span>
        </div>
        <ImageNavigation />
      </div>
    </div>
  );
};

export default AutorizedAversys;
