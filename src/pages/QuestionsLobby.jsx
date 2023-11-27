import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GroupsContext } from "../context/GroupsContext";
import { QuestionsContext } from "../context/QuestionsContext";
import GroupInGameCard from "../components/GroupInGameCard";

function QuestionsLobby() {
  const { groups } = useContext(GroupsContext);
  const { currentQuestionId, setCurrentQuestionId } = useContext(QuestionsContext);
  const [counter, setCounter] = useState(5); // Contador inicializado en 5 segundos

  let navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    const timer = setTimeout(() => {
      clearInterval(interval); // Limpia el intervalo antes de la redirección
      setCurrentQuestionId(currentQuestionId + 1);
      navigate("/question");
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [setCurrentQuestionId, navigate, currentQuestionId]);

  return (
    <div>
      <h2>Redirigiendo en {counter} segundos...</h2>
      {groups.map((group) => (
        <GroupInGameCard key={group.id} id={group.id} />
      ))}
    </div>
  );
}

export default QuestionsLobby;
