import styled from "styled-components";
import {motion} from "framer-motion";

export const StyledBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const StyledModal = styled(motion.div)`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 20px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 10px;
  text-align: center;

  p {
    font-weight: bold;
  }

  span {
    position: absolute;
    top: 0;
    right: 8px;
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`;
