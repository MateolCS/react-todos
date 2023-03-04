import styled from "styled-components";

export const StyledToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  height: 100%;
  background-color: #f7f1e5;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 45%;
  }
`;
