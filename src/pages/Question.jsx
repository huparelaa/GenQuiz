import { useContext } from "react";
import { QuestionsContext } from "../context/QuestionsContext";
import QuestionCard from "../components/QuestionCard";
import AnswersCard from "../components/AnswersCard";
import { useNavigate } from "react-router-dom";
import { QUESTIONS } from "../questions";
function Question() {
  const { currentQuestionId } = useContext(QuestionsContext);
  const isLastQuestion = currentQuestionId === QUESTIONS.length;
  let navigate = useNavigate();
  const handleNextQuestion = () => {
    if (isLastQuestion) {
      navigate("/results");
    } else {
      navigate("/lobby");
    }
  };
  return (
    <>
      <section>
        <div>
          <button className="m-3 p-3 bg-red-500" onClick={handleNextQuestion}>
            Avanzar
          </button>
        </div>
        <div className="flex justify-center flex-col">
          <QuestionCard />
          <AnswersCard />
        </div>
      </section>
    </>
  );
}

export default Question;
