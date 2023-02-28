import React from "react";
import { StyledToDo } from "../styles/ToDo.styled";
const ToDo = ({ task, handleTaskCompletion }) => {
  return (
    <StyledToDo>
      <input type="checkbox" onChange={() => handleTaskCompletion(task.id)} />
      <p>{task.text}</p>
    </StyledToDo>
  );
};

export default ToDo;
