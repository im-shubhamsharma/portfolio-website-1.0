import styled from "styled-components";
import {motion} from "framer-motion";

export const CardContainer = styled(motion.div)`
  box-shadow: 0px 0px 10px 0px rgba(0px, 0px, 0px, 0.08);
  background-color: rgb(34, 36, 38);
  border: 1px solid rgba(0, 0, 0, 1);
  transition: all 0.3s linear 0s;
  padding: 1rem;
  background-color: transparent;
  backdrop-filter: blur(5px);

  display: flex;
  flex-direction: column;

  width: 20rem;
  height: 20rem;
  overflow: hidden;

  &:hover {
    scale: 1.05;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 5rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;



export const CardContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;


export const StyledDesc = styled.p`
  font-size: 1rem;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3.2rem;

  @media only screen and (max-width: 500px) {
    font-size: 10px;
    gap:1rem;
  }
`;