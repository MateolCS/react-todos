import styled from "styled-components";

export const StyledFormModal = styled.div`
  width: 300px;
  background-color: #e96479;
  border-radius: 10px;
  border: 2px solid #4d455d;
  margin-top: auto;

  h2 {
    text-align: center;
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    width: 700px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
`;

export const StyledInput = styled.input`
  width: 80%;
  padding: 0.5rem 0.3rem;
  border-radius: 10px;
  border: 2px solid #4d455d;
  background-color: #f5e9cf;
  color: #4d455d;
`;

export const StyledButton = styled.button`
  width: 80%;
  background-color: #7db9b6;
  color: #f5e9cf;
  border: none;
  padding: 0.2rem 0;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 10px;
`;
