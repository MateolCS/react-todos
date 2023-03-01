import styled from "styled-components";

export const StyledToDo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  border: 1px solid #4d455d;
  border-radius: 10px;
  padding: 0.5rem;
`;

export const StyledToDoTitle = styled.h3`
  font-size: 1.2rem;
  color: #4d455d;
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
`;
