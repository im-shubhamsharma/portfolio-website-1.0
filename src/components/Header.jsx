import React, { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link, NavLink } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { Button } from "@mui/material";

function Header(props) {
  const [theme, setTheme] = useState("light");

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
    <div className="header">
      <nav>
        <NavLink className="link" to="/about">
          About
        </NavLink>
        <span></span>

        <NavLink className="link" to="/skills">
          Skills
        </NavLink>
        <span></span>

        <NavLink className="link" to="/">
          <span id="home"> Home </span>
        </NavLink>
        <span></span>

        <NavLink className="link" to="/projects">
          Projects
        </NavLink>
        <span></span>

        <NavLink className="link" to="/Contact">
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
