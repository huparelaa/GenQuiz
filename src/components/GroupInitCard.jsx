import React, { useState, useContext } from "react";
import Edit from "../assets/Edit";
import Reload from "../assets/Reload";
import {
  generateRandomColor,
  generateRandomNames,
} from "../utils/randomGeneration";
import Remove from "../assets/Remove";
import { GroupsContext } from "../context/GroupsContext";

const GroupInitCard = ({ id }) => {
  const { groups, updateGroup, removeGroup } = useContext(GroupsContext);
  const group = groups.find((g) => g.id === id); // Encuentra el grupo por ID

  const [isEditing, setIsEditing] = useState(false);
  const [newGroupName, setNewGroupName] = useState(group.name);
  const [color, setColor] = useState(group.color);
  const groupName = group.name;

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleGroupNameChange = (e) => {
    setNewGroupName(e.target.value);
  };

  const handleSave = () => {
    const updatedGroup = {
      ...group,
      name:
        newGroupName === "" || newGroupName.length > 30
          ? generateRandomNames()
          : newGroupName,
      color: color,
    };
    updateGroup(id, updatedGroup);
    setIsEditing(false);
  };

  const handleReload = () => {
    const newColor = generateRandomColor();
    setColor(newColor);
    const updatedGroup = {
      ...group,
      color: newColor,
    };
    updateGroup(id, updatedGroup);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newGroupName}
            onChange={handleGroupNameChange}
            className="text-2xl"
          />
          <button onClick={handleSave}>Guardar</button>
        </div>
      ) : (
        <div
          className="flex justify-between items-center flex-col p-2 m-2 rounded-lg"
          style={{ background: color.bg, color: color.text }}
        >
          <div className="flex gap-2">
            <h3 className="text-2xl">{groupName}</h3>
            <button onClick={handleEdit}>
              <Edit />
            </button>
            <button onClick={handleReload}>
              <Reload />
            </button>
            <button onClick={() => removeGroup(id)}>
              <Remove />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupInitCard;
