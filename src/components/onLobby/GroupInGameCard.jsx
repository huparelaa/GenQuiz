import React, { useContext } from "react";
import { GroupsContext } from "../../context/GroupsContext"; // Asegúrate de que la ruta sea correcta

const GroupInGameCard = ({ id }) => {
  const { groups } = useContext(GroupsContext);
  const group = groups.find((group) => group.id === id);

  if (!group) {
    return <div>Grupo no encontrado</div>;
  }

  const { name, color, keyAssigned, points } = group;

  return (
    <div
      style={{
        backgroundColor: color.bg,
        color: color.text,
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <div className="flex justify-center gap-5">
        <h3 className="text-3xl">{name}</h3>
        <p className="text-3xl">{points}</p>
      </div>

      <p className="text-2xl">{keyAssigned}</p>
    </div>
  );
};

export default GroupInGameCard;
