import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
  background-color: #4d455d;
  margin-top: auto;
`;

export const StyledGithubLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.7rem;
`;

export const StyledGithubIcon = styled(FaGithub)`
  color: #fff;

  &:hover {
    color: #e96479;
    cursor: pointer;
    font-weight: 700;
  }
`;

export const StyledFooterText = styled.p`
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
`;
