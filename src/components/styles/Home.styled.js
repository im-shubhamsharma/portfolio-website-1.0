import styled, { keyframes } from "styled-components";
import {motion} from "framer-motion"

export const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  overflow: none;
  z-index: 1;
  scroll-snap-align: start;

  @media only screen and (max-width: 500px) {
    scroll-snap-align: none;
    width: 100%;
  }
`;

const fadeIn = keyframes`
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
`

export const SubContainer = styled(motion.div)`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 5rem;

  .arrow {
    position: absolute;
    bottom: 0;
    left: 50%;
    opacity: 0;
    animation: ${fadeIn} 1s linear 3s forwards;
  }

  @media only screen and (max-width: 500px) {
    flex: 1;
    width: 100%;
    justify-content: end;
    padding: 2rem 0 2rem 2rem;
    font-size: 2.4rem;

    .arrow{
      bottom: 10vh;
    }
  }
`;

export const Greetings = styled.div`

  
`;

export const StyledName = styled.div`
  text-transform: uppercase;
 

  @media only screen and (max-width: 500px) {
    margin: 0.5rem 0;
  }
`;

export const DynamicTextContainer = styled.div`
  text-transform: uppercase;
  display: flex;
  opacity: 0;
  animation: ${fadeIn} 1s linear 3s forwards;

  @media only screen and (max-width: 500px) {
    text-transform: uppercase;
    font-size: 1.7rem;
  }
`;

export const StyledSpan = styled.span`
  text-transform: uppercase;
  color: white;
  overflow: hidden;
`;


export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 1rem 0;
  transition: all 0.3s linear 0s;

  ion-icon {
    cursor: pointer;
    transition: 0.3s linear;
    color: white;

    &:hover {
      scale: 1.05;
    }

    @media only screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }
`;
