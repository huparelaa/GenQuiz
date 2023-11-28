import { QuestionsContext } from "../context/QuestionsContext";
import { useContext } from "react";
import { QUESTIONS } from "../questions";
function QuestionPresentation() {
  const { currentQuestionId } = useContext(QuestionsContext);

  const { question } = QUESTIONS.find(
    (question) => question.id === currentQuestionId
  );

  if (!question) {
    return <div>Pregunta no encontrada</div>;
  }

  return <div>{question}</div>;
}

export default QuestionPresentation;
