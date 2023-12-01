import React, { useState, useEffect } from "react";
import PlusCircle from "../../assets/PlusCircle";
import { EDITING, SELECTING } from "../../constants";

function TeamQuestionCard({ group, updateGroup, state, keyPressed }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isEditing, setIsEditing] = useState(state === EDITING);
  const [cardStyle, setCardStyle] = useState({});

  // Efecto para manejar el enfoque basado en keyPressed
  useEffect(() => {
    if (keyPressed?.toUpperCase() === group.keyAssigned.toUpperCase()) {
      setIsFocused(true);
    }else{
      setIsFocused(false);
    }

  }, [keyPressed, group.keyAssigned]);

  // Efecto para manejar el estilo de la tarjeta
  useEffect(() => {
    const style = {
      backgroundColor: group.color.bg,
      color: group.color.text,
      opacity: isFocused ? 1 : 0.3,
    };
    setCardStyle(style);
  }, [group.color.bg, group.color.text, isFocused]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPoints = event.target[0].value;
    const oldPoints = group.points;
    // Cast to number
    const points = Number(newPoints) + Number(oldPoints);
    const newGroup = { ...group, points: points };
    updateGroup(group.id, newGroup);
  };

  return (
    <>
      <div
        style={cardStyle}
        className="m-3"
        key={group.id}
        onClick={() => setIsEditing(true)}
      >
        <p>{group.name}</p>
        {isEditing && (
          <form
            className="flex justify-center items-center"
            onSubmit={handleSubmit}
          >
            <input type="number" className="m-1" name="points" />
            <button type="submit">
              <PlusCircle />
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default TeamQuestionCard;
