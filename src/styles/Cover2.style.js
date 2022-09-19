import styled from "styled-components";
import {motion} from "framer-motion";

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
  }
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 480px) {
    display: none;
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
  /* border: 1px solid ${({ theme }) => theme.primaryColor}; */
  padding: 2rem;
  border-radius: 10px;

  p{
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

  &:hover{
     scale:1.1;
  }
`;

