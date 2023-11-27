import React, { useContext } from "react";
import { GroupsContext } from "../context/GroupsContext";

function Questions() {
    const { groups } = useContext(GroupsContext);
    console.log(groups);
  return (
    <div>
        
    </div>
  )
}

export default Questions
