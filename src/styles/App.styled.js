import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  align-self: stretch;
  height: 100%;
  display: flex;
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const StyledTaskGroup = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  height: 100%;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
