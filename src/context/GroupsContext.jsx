import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Importa la función para generar UUID v4
import {
  generateRandomColor,
  generateRandomNames,
} from "../utils/randomGeneration";
import { MAX_TEAMS } from "../constants";
import assignKey from "../utils/assignKey";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  const addGroup = () => {
    if (groups.length < MAX_TEAMS) {
      setGroups([
        ...groups,
        {
          id: uuidv4(), // Usa UUID para el ID
          name: generateRandomNames(),
          color: generateRandomColor(),
          points: 0,
          keyAssigned: assignKey(),
        },
      ]);
    }
  };

  const removeGroup = (groupId) => {
    setGroups(groups.filter((group) => group.id !== groupId));
  };

  const updateGroup = (groupId, newGroup) => {
    setGroups(groups.map((group) => (group.id === groupId ? newGroup : group)));
  };

  return (
    <GroupsContext.Provider value={{ groups, addGroup, removeGroup, updateGroup }}>
      {children}
    </GroupsContext.Provider>
  );
};
