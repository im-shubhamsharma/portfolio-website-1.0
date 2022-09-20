import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCover = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100vh;
  width: 5rem;
  position: fixed;
  top: 0;
  right: 2rem;
  z-index: 0;

  @media (max-width: 1080px) {
    right: 0rem;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 5vh;
    position: static;
    bottom: 0;
    justify-content: center;
    align-items: center;
  }
`;

export const RightContainer = styled(motion.div)`
  display: flex;
  width: 5rem;
  height: max-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  font-size: 2.5rem;
  padding: 2rem;
  border-radius: 10px;

  p {
    transform: rotate(90deg);
    font-size: 1rem;
  }

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 8rem;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.primaryColor};
  }

  @media (max-width: 768px) {
    border: 2px solid ${({ theme }) => theme.primaryColor};
    width: 100%;
    flex-direction: row;
    padding: 1rem;
    border-radius: 20px 20px 0 0;

    &:after {
      display: none;
    }
  }
`;

export const ColorOptions = styled(motion.div)`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1rem;
  border: 0;
  background-color: ${(props) => props.color};
  opacity: 0.8;
  overflow: hidden;
  color: transparent;
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
`;
