import styled from "styled-components";
import {motion} from "framer-motion"

export const StyledHeader = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 1rem 5rem;
  background-color: ${props => props.theme.backgroundColor};
  z-index:10;

  .show-menu {
    color: ${(props) => props.theme.primaryColor};
    font-size: 2rem;
    display: none;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 7vh;
    padding: 0 1rem;

    .show-menu {
      display: ${({ menu, homeIsInView }) =>
        homeIsInView ? "none" : menu ? "none" : "block"};
    }
  }
`;

export const StyledNav = styled(motion.nav)`
  position: relative;
  width: 100%;
  margin: auto;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;

  .hide-menu {
    color: ${(props) => props.theme.primaryColor};
    font-size: 2.2rem;
    position: absolute;
    top: 10px;
    right: 30px;
    display: none;
  }

  ion-icon {
    color: ${(props) => props.theme.textColor};
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};
    z-index: 200;
    font-size: 1.8rem;
    border: 2px solid ${(props) => props.theme.primaryColor};
    display: ${({ menu }) => (menu ? "flex" : "none")};

    .hide-menu {
      display: block;
    }
  }
`;

export const StyledNavItem = styled(motion.li)`
  cursor: pointer;

  span {
    color: ${(props) => props.theme.primaryColor};
    font-size: 0.9rem;
  }
`;

export const SubTitle = styled(motion.h3)`
  display: ${({ homeIsInView }) => (homeIsInView ? "none" : "block")};

  @media only screen and (max-width: 500px) {
    padding-left: 1rem;
    font-size: 2rem;
  }
`;

export const ResumeButton = styled(motion.li)`
  color: ${(props) => props.theme.primaryColor};
  border: 2px solid ${(props) => props.theme.primaryColor};
  padding: 2px 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s linear 0s;

  &:hover {
    scale: 1.2;
  }
`;
