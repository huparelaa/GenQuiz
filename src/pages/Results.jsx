import { useNavigate } from "react-router-dom";
import { GroupsContext } from "../context/GroupsContext";
import { useContext } from "react";
import { QuestionsContext } from "../context/QuestionsContext";
import { restoreKey } from "../utils/assignKey";

function Results() {
  let navigate = useNavigate();
  const { setGroups } = useContext(GroupsContext);
  const { setCurrentQuestionId } = useContext(QuestionsContext);

  const handleRestart = () => {
    setGroups([]);
    setCurrentQuestionId(null);
    restoreKey();
    navigate("/");
  };

  return (
    <>
      <div>I'm the winner :D</div>
      <button onClick={handleRestart}>Reiniciar</button>
    </>
  );
}

export default Results;
