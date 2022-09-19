import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSpringSection = styled(motion.section)`
  /* scroll-snap-align: start; */
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -100;

  @media only screen and (max-width: 768px) {
    scroll-snap-align: none;
    height: auto;
  }
`;

export const StyledSpring = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${(props) => props.theme.primaryColor};
  opacity: 0.3;
`;
