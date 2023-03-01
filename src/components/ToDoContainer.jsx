import React from "react";
import ToDo from "./ToDo";
import { StyledToDoContainer } from "../styles/ToDoContainer.styled";
const ToDoContainer = ({ tasksList, handleTaskStatusChange, title }) => {
  return (
    <StyledToDoContainer>
      <h2>{title}</h2>
      {tasksList.map((task) => {
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
