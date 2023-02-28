import React from "react";
import {
  StyledFooter,
  StyledGithubLink,
  StyledGithubIcon,
  StyledFooterText,
} from "../styles/Footer.styled";
const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterText>
        Made by @MateoICS
        <StyledGithubLink href="https://github.com/MateolCS">
          <StyledGithubIcon />
        </StyledGithubLink>
      </StyledFooterText>
    </StyledFooter>
  );
};

export default Footer;
