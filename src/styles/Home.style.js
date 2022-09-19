import styled from "styled-components";
import {motion} from "framer-motion"

export const HomeContainer = styled(motion.div)`
  /* scroll-snap-align: end; */
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: transparent;
  font-size: 3.5rem;
  color: #fff;

  h1 {
  }

  .typewriter {
  }

  .arrow {
    font-size: 2rem;
    position: absolute;
    bottom: 5vh;
  }

  @media (max-width: 1080px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    justify-content: center;
    /* align-items: flex-start; */
    padding: 0 1rem;
    font-size: 1.3rem;

    .arrow {
      bottom: 8vh;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 1rem 0;
  transition: all 0.3s linear 0s;
  font-size: 5rem;

  ion-icon {
    cursor: pointer;
    transition: 0.3s linear;
    color: #fff;

    &:hover {
      scale: 1.05;
    }

    @media (max-width: 1080px) {
      font-size: 3rem;
    }
    @media (max-width: 768px) {
      font-size: 3rem;
    }
    @media (max-width: 480px) {
      font-size: 3rem;
    }
  }
`;
