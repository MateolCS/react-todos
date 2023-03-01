import styled from "styled-components";

export const StyledToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 45%;
  }
`;
