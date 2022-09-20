import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";

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
  background-color: ${(props) => props.theme.backgroundColor};
  z-index: 10;

  .hamburger {
    width: 2rem;
    height: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    overflow: hidden;
    display: none;

    span {
      width: 100%;
      height: 3px;
      background-color: ${(props) => props.theme.primaryColor};
      transform-origin: left;
      transition: all 0.8s ease;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 7vh;
    padding: 0 2rem;

    .hamburger {
      display: flex;
    }

    .active {
      span {
        &:first-child {
          /* background-color: white; */
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:last-child {
          /* background-color: white; */
          transform: rotate(-45deg);
        }
      }
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
  transition: 1s linear;

  ion-icon {
    color: ${(props) => props.theme.textColor};
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 93vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};
    /* opacity: 0.9; */
    z-index: 200;
    font-size: 1.8rem;
    border: 2px solid ${(props) => props.theme.primaryColor};
    margin-top: 7vh;
    transition: 0.8s linear;
    transform: ${({ showMenu }) =>
      showMenu ? `translateX(0vw)` : `translateX(100vw)`};

    @media (max-width: 1080px) {
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
      ion-icon {
        font-size: 2.2rem;
      }
    }
  }
`;

export const StyledNavItem = styled(motion.li)`
  cursor: pointer;

  span {
    color: ${(props) => props.theme.primaryColor};
    font-size: 0.9rem;
    font-weight: 600;
  }

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    span {
      display: none;
    }
  }
`;

export const SubTitle = styled(motion.h3)`
  @media only screen and (max-width: 500px) {
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
