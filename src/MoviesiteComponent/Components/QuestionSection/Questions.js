import React, { useState } from "react";
import "./Question.css";
import SingleQuestion from "./SingleQuestion";
import items from "./data";
import { useGlobalContext } from "../../context";

const Questions = () => {
  const { data } = useGlobalContext();
  const { openSwitch } = useGlobalContext();
  const [dataForQuestion, setDataForQuestion] = useState(items[0]);
  const [dataForSpanish, setDataForSpanish] = useState(items[1]);
  // console.log(dataForSpanish);

  return (
    <div className="question-section">
      <div className="breakline"></div>
      <h1>{data.questiontitle}</h1>
      <div className="questions-container">
        {openSwitch
          ? dataForSpanish.map((item, index) => {
              return <SingleQuestion {...item} key={index} />;
            })
          : dataForQuestion.map((item, index) => {
              return <SingleQuestion {...item} key={index} />;
            })}
      </div>
    </div>
  );
};

export default Questions;
