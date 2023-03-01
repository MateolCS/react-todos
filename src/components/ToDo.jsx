import React from "react";
import { StyledToDo, StyledToDoTitle } from "../styles/ToDo.styled";
const ToDo = ({ task, handleTaskStatusChange }) => {
  return (
    <StyledToDo>
      <input type="checkbox" onChange={() => handleTaskStatusChange(task.id)} />
      <StyledToDoTitle isCompleted={task.isCompleted}>
        {task.name}
      </StyledToDoTitle>
    </StyledToDo>
  );
};

export default ToDo;
