import React, {useContext} from "react";
import {QuestionsContext} from "../context/QuestionsContext";

function Question() {
  const {currentQuestionId} = useContext(QuestionsContext);

  return <div>Question {currentQuestionId}</div>;
}

export default Question;
