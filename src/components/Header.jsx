import React from 'react'
import { StyledHeader, StyledNav, SubTitle } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <SubTitle> SS </SubTitle>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Resume</li>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header