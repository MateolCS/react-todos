import React from "react";
import { StyledToDo } from "../styles/ToDo.styled";
const ToDo = ({ task, handleTaskStatusChange }) => {
  return (
    <StyledToDo>
      <input type="checkbox" onChange={() => handleTaskStatusChange(task.id)} />
      <p>{task.name}</p>
    </StyledToDo>
  );
};

export default ToDo;
