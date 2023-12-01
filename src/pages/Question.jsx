import { useContext, useEffect, useState } from "react";
import { QuestionsContext } from "../context/QuestionsContext";
import QuestionCard from "../components/onQuestion/QuestionCard"
import AnswersCard from "../components/onQuestion/AnswersCard";
import TeamsInQuestion from "../components/onQuestion/TeamsInQuestion";
import { useNavigate } from "react-router-dom";
import { QUESTIONS } from "../questions";

function Question() {
  const { currentQuestionId } = useContext(QuestionsContext);
  const isLastQuestion = currentQuestionId === QUESTIONS.length;
  const [keyPressed, setKeyPressed] = useState(null)
  let navigate = useNavigate();

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      navigate("/results");
    } else {
      navigate("/lobby");
    }
  };

  // Función para manejar el evento de tecla presionada
  const handleKeyPress = (event) => {
    setKeyPressed(event.key)
  };

  // Usar useEffect para agregar y eliminar el listener de eventos
  useEffect(() => {
    // Agregar el evento al montar
    window.addEventListener("keydown", handleKeyPress);

    // Limpiar el evento al desmontar
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <section>
        <div>
          <button className="m-3 p-3 bg-red-500 hover:cursor-pointer" onClick={handleNextQuestion}>
            Avanzar
          </button>
        </div>
        <div className="flex justify-center flex-col">
          <QuestionCard />
          <AnswersCard />
          <TeamsInQuestion keyPressed={keyPressed}/>
        </div>
      </section>
    </>
  );
}

export default Question;
