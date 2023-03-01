import React, { useState } from "react";
import {
  StyledFormModal,
  StyledForm,
  StyledButton,
  StyledInput,
} from "../styles/FormModal.styled";
const FormModal = ({ AddTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      id: Math.floor(Math.random() * 10000) + 1,
      name: taskName,
      completed: false,
    };

    AddTask(task);
    setTaskName("");
  };

  return (
    <StyledFormModal>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Add Task</h2>
        <StyledInput
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <StyledButton type="submit">Add Task</StyledButton>
      </StyledForm>
    </StyledFormModal>
  );
};

export default FormModal;
