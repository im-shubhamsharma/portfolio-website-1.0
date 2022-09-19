import React, { useState, useEffect } from "react";
import {
  StyledHeader,
  StyledNav,
  SubTitle,
  ResumeButton,
  StyledNavItem,
} from "../styles/Header.style";
import { navItems } from "../utils/constants";
import { Link } from "react-scroll";
import { motion, useAnimationControls } from "framer-motion";
import {
  headerVariant,
  headerChildren,
} from "../utils/animation";
import Cover from "./Cover";
//------------------------------------

//------------------------------------

const Header = ({ theme, themeToggler, homeView }) => {
  //----------------------------------
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu((prevState) => !prevState);
  //-----------------------------------

  const controls = useAnimationControls();
  useEffect(() => {
    if (homeView) {
      controls.start("hidden");
    }
    if (!homeView) {
      controls.start("visible");
    }
  }, [homeView]);

  //---------------------------------------
  const navItemsElem = navItems.map((item, i) => (
    <StyledNavItem key={item.id} variants={headerChildren}>
      <Link
        activeClass="active"
        to={item.to}
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onClick={toggleMenu}
      >
        <span>{item.id}.</span>&nbsp;{item.name}
      </Link>
    </StyledNavItem>
  ));
  //-----------------------------------
  return (
    <StyledHeader variants={headerVariant} animate={controls}>
      <SubTitle variants={headerChildren}> SS </SubTitle>
      <StyledNav>
      
        {navItemsElem}

        <motion.div variants={headerChildren}>
          {theme === "dark" && (
            <ion-icon
              onClick={() => {
                themeToggler(), toggleMenu();
              }}
              name="sunny-outline"
            ></ion-icon>
          )}
          {theme === "light" && (
            <ion-icon
              onClick={() => {
                themeToggler(), toggleMenu();
              }}
              name="moon-outline"
            ></ion-icon>
          )}
        </motion.div>

        <ResumeButton variants={headerChildren}>Resume</ResumeButton>
        <i
          variants={headerChildren}
          onClick={toggleMenu}
          className="fa-solid fa-xmark hide-menu"
        ></i>
      </StyledNav>
      <i
        variants={headerChildren}
        onClick={toggleMenu}
        className="fa-solid fa-bars show-menu"
      ></i>
    </StyledHeader>
  );
};

export default Header;
