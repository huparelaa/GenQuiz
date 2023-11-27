import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GroupInitCard from "../components/GroupInitCard";
import { GroupsContext } from "../context/GroupsContext";

const StartPage = () => {
  let navigate = useNavigate();
  const { groups, addGroup } = useContext(GroupsContext);


  const handleClick = () => {
    navigate("/question");
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="groupsCardView">
        {groups.map((group) => (
          <GroupInitCard key={group.id} id={group.id}/>
        ))}
      </div>
      <button onClick={addGroup} className="p-2.5 bg-blue-500 hover:bg-blue-400 rounded transition-all">
        Añadir Equipo
      </button>
      <button
        onClick={handleClick}
        className="p-2.5 bg-slate-800 hover:bg-slate-700 rounded transition-all mt-4"
      >
        INICIAR
      </button>
    </div>
  );
};

export default StartPage;
