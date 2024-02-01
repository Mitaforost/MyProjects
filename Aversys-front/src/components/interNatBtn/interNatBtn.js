import style from "./style.module.scss";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";

const InterNatBtn = () => {
  const [language, setLanguage] = useState("ru");
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <select
      className={style.languageButton}
      value={language}
      onChange={(e) => {
        setLanguage(changeLanguage(e.target.value));
      }}
    >
      <option value="ru">Русский</option>
      <option value="en">English</option>
    </select>
  );
};

export default InterNatBtn;
