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
  left: 2rem;
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

export const LeftContainer = styled(motion.div)`
  display: flex;
  width: 5rem;
  height: max-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.7rem;
  padding: 2rem;

  .fa-icons {
    color: ${(props) => props.theme.textColor};
    cursor: pointer;
    transition: 0.2s linear;

    &:hover {
      scale: 1.1;
    }
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

