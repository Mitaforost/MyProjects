import React from "react";
import style from "./style.module.scss";

const ListOfQuestions = () => {
  const questions = [
    "Какой-то вопрос 1",
    "Какой-то вопрос 2",
    "Какой-то вопрос 3",
    "Какой-то вопрос 4",
    "Какой-то вопрос 5",
    "Какой-то вопрос 6",
    "Какой-то вопрос 7",
    "Какой-то вопрос 8",
    "Какой-то вопрос 9",
    "Какой-то вопрос 10",
    "Какой-то вопрос 11",
    "Какой-то вопрос 12",
    "Какой-то вопрос 13",
    "Какой-то вопрос 14",
    "Какой-то вопрос 15",
  ];
  const listQuestions = questions.map((questions) => (
    <button className={style.questionBtn}>{questions}</button>
  ));

  return (
    <div className={style.scrollBlock}>
      <div className={style.questionList}>{listQuestions}</div>
    </div>
  );
};

export default ListOfQuestions;
