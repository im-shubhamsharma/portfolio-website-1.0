import React, { useState, useRef, useEffect } from "react";
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
import { headerVariant, headerChildren } from "../utils/animation";
import Resume from "../assets/Resume.pdf";
//------------------------------------

//------------------------------------

const Header = ({ theme, themeToggler, homeView }) => {
  //----------------------------------
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  const hamRef = useRef();

  const toggleNavbar = () => {
    hamRef.current.classList.toggle("active");
    setShowMenu((prevState) => !prevState);
  };
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
        onClick={showMenu && toggleNavbar}
      >
        <span>{item.id}.</span>&nbsp;{item.name}
      </Link>
    </StyledNavItem>
  ));
  //-----------------------------------
  return (
    <StyledHeader variants={headerVariant} animate={controls}>
      <SubTitle variants={headerChildren}> SS </SubTitle>
      <StyledNav showMenu={showMenu}>
        {navItemsElem}

        <motion.div variants={headerChildren}>
          {theme === "dark" && (
            <ion-icon
              onClick={() => {
                themeToggler(), showMenu && toggleNavbar();
              }}
              name="sunny-outline"
            ></ion-icon>
          )}
          {theme === "light" && (
            <ion-icon
              onClick={() => {
                themeToggler(), showMenu && toggleNavbar();
              }}
              name="moon-outline"
            ></ion-icon>
          )}
        </motion.div>

        <ResumeButton
          variants={headerChildren}
          onClick={() => showMenu && toggleNavbar()}
        >
          <a href={Resume} download="Shubham_Resume" style={{ color: "#fff" }}>
            Resume
          </a>
        </ResumeButton>
      </StyledNav>

      <div ref={hamRef} className="hamburger" onClick={toggleNavbar}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
    </StyledHeader>
  );
};

export default Header;
