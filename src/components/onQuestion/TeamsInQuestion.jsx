import { useContext } from "react";
import { GroupsContext } from "../../context/GroupsContext";
import TeamQuestionCard from "./TeamQuestionCard";
import { EDITING, SELECTING } from "../../constants";

function TeamsInQuestion({ keyPressed }) {
  const { groups, updateGroup } = useContext(GroupsContext);

  return groups.map((group) => (
    <TeamQuestionCard
      group={group}
      key={group.id}
      state={EDITING}
      updateGroup={updateGroup}
      keyPressed={keyPressed}
    />
  ));
}

export default TeamsInQuestion;
