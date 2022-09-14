import styled from "styled-components";
import {motion} from "framer-motion";

export const StyledFilterContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;

  @media only screen and (max-width: 500px) {
     gap:0.5rem;
     font-size: 10px;
     width: 100%;
     overflow-x: auto;
  }
`;

export const StyledFilters = styled(motion.div)`
  width: max-content;
  border: 1px solid rgba(0, 0, 0, 1);
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.4s linear;
  margin-bottom: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    scale: 1.1;
  }
`;


export const ProjectCardContainer = styled(motion.div)`
  height: 40rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow-y: auto;
  margin-bottom: 10rem;

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

