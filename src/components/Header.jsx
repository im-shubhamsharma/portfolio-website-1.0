import React, { useState, useRef, useEffect } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link, NavLink } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { Button } from "@mui/material";
import { gsap } from "gsap";
import {
  StyledHeader,
  StyledNav,
  StyledLogo,
  StyledNavLink,
} from "./styles/Header.styled.js";

function Header(props) {
  const [theme, setTheme] = useState("light");

  const headerRef = useRef();

  useEffect(() => {
    gsap.to(headerRef.current, {
      duration: 1,
      y: 0,
      ease: "power3.inOut",
      delay: 0.3,
    });
  }, []);

  const navItems = [
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Skills",
      link: "/skills",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <StyledHeader ref={headerRef}>
        <StyledLogo>{`<SS>`}</StyledLogo>
        <StyledNav>
          <StyledNavLink className="link" to="/">
            <span id="home"> Home </span>
          </StyledNavLink>
          <StyledNavLink className="link" to="/about">
            About
          </StyledNavLink>

          <StyledNavLink className="link" to="/skills">
            Skills
          </StyledNavLink>

          <StyledNavLink className="link" to="/projects">
            Projects
          </StyledNavLink>

          <StyledNavLink className="link" to="/Contact">
            Contact
          </StyledNavLink>
        </StyledNav>
      </StyledHeader>
    </>
  );
}

export default Header;
