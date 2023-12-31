import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GroupsContext } from "../context/GroupsContext";
import { QuestionsContext } from "../context/QuestionsContext";
import GroupInGameCard from "../components/onLobby/GroupInGameCard";
import { useCounter } from "../hooks/useCounter";
import { LOBBY_WAIT_TIME } from "../constants";

function QuestionsLobby() {
  const { groups } = useContext(GroupsContext);
  const { currentQuestionId, setCurrentQuestionId } = useContext(QuestionsContext);
  const { counter, doSomething } = useCounter(LOBBY_WAIT_TIME);

  let navigate = useNavigate();

  useEffect(() => {
    if (doSomething) {
      setCurrentQuestionId(currentQuestionId + 1);
      navigate("/question");
    }
  }, [doSomething]);

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
