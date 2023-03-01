import React from "react";
import ToDo from "./ToDo";
import { StyledToDoContainer } from "../styles/ToDoContainer.styled";
const ToDoContainer = ({ doDoList, handleTaskStatusChange }) => {
  return (
    <StyledToDoContainer>
      {doDoList.map((task) => {
        return (
          <ToDo
            key={task.id}
            task={task}
            handleTaskStatusChange={handleTaskStatusChange}
          />
        );
      })}
    </StyledToDoContainer>
  );
};

export default ToDoContainer;
