import { QuestionsContext } from "../../context/QuestionsContext";
import { useContext } from "react";
import { QUESTIONS } from "../../questions";

function AnswersCard() {
  const { currentQuestionId } = useContext(QuestionsContext);

  const { choices } = QUESTIONS.find(
    (question) => question.id === currentQuestionId
  );
  return (
    <div className="w-1/2 self-center">
      {choices.map((choice, _id) => (
        <div className="bg-gray-500"  key={_id}>{choice}</div>
      ))}
    </div>
  );
}

export default AnswersCard;
