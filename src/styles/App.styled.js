import styled from "styled-components";
import { AiFillFolderAdd } from "react-icons/ai";
export const StyledMain = styled.main`
  width: 100%;
  align-self: stretch;
  height: 100%;
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
  height: 100%;
`;

export const StyledOpenModalButton = styled(AiFillFolderAdd)`
  color: #e96479;
  font-size: 3rem;
  cursor: pointer;
  align-self: center;
`;
