import { imagesMainPage } from "../../images/imagesConfig";
import { useTranslation } from "react-i18next";
import style from "./style.module.scss";
import InterNatBtn from "../../components/interNatBtn/interNatBtn";
const AversysMain = () => {
  const { t } = useTranslation();

  return (
    <div className={style.mainPage}>
      <div className={style.mainPageHeader}>
        <div className={style.langButton}>
          <InterNatBtn />
        </div>
        <div className={style.logoImage}>
          <img src={imagesMainPage.emblem} alt="emblem"></img>
        </div>
      </div>
      <div className={style.mainText}>
        <div className={style.compName}>
          <span>AVERSYS</span>
        </div>
        <div className={style.phrase}>
          <p>{t("mainPage.introduction")}</p>
        </div>
        <div className={style.asysDarkNav}>
          <img src={imagesMainPage.asysDarkMode} alt="imageNavigation"></img>
        </div>
      </div>
    </div>
  );
};

export default AversysMain;
