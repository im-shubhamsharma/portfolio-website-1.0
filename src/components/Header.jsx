import React, { useState, useRef, useEffect } from "react";
import {
  StyledHeader,
  StyledNav,
  SubTitle,
  ResumeButton,
  StyledNavItem,
} from "./styles/Header.styled";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { Link } from "react-scroll";
import { navItems } from "../utils/constants";

//--------------------------------------------

const navVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1 },
  },
};

//------------------------------------------------
const Header = ({ homeRef, theme, setTheme }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu((prevState) => !prevState);

  //----------------------------------------------
  const controls = useAnimationControls();
  const homeIsInView = useInView(homeRef);

  useEffect(() => {
    if (homeIsInView) {
      controls.start("hidden");
    }
    if (!homeIsInView) {
      controls.start("visible");
    }
  }, [homeIsInView]);

  //----------------------------------------------

  const navItemsElem = navItems.map((item) => (
    <StyledNavItem key={item.id} style={{ cursor: "pointer" }}>
      <Link
        activeClass="active"
        to={item.to}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={toggleMenu}
      >
        <span>{item.id}.</span>&nbsp;{item.name}
      </Link>
    </StyledNavItem>
  ));

  //----------------------------------------------
  function toggleTheme() {
    setTheme(prevState => !prevState);
  }
  //----------------------------------------------

  return (
    <StyledHeader menu={menu} homeIsInView={homeIsInView}>
      <SubTitle homeIsInView={homeIsInView}> SS </SubTitle>

      <StyledNav menu={menu} variants={navVariant} animate={controls}>
        {navItemsElem}
        {!theme && (
          <ion-icon onClick={toggleTheme} name="sunny-outline"></ion-icon>
        )}
        {theme && (
          <ion-icon onClick={toggleTheme} name="moon-outline"></ion-icon>
        )}
        <ResumeButton>Resume</ResumeButton>
        <i onClick={toggleMenu} className="fa-solid fa-xmark hide-menu"></i>
      </StyledNav>

      <i onClick={toggleMenu} className="fa-solid fa-bars show-menu"></i>
    </StyledHeader>
  );
};

export default Header;
