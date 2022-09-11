import React, {useRef, useEffect} from 'react'
import { StyledHeader, StyledNav, SubTitle } from "./styles/Header.styled";

const Header = () => {

  const Header = useRef();

    
  return (
    <StyledHeader ref={Header}>
      <StyledNav>
        <SubTitle> SS </SubTitle>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <li style={{ color: "#f51720" }}>Resume</li>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header