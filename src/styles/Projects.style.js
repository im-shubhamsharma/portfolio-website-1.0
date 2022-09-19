import styled from "styled-components";
import {motion} from "framer-motion";

export const StyledFilterContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  @media only screen and (max-width: 500px) {
    gap: 0.5rem;
    font-size: 10px;
    width: 100%;
    overflow-x: auto;
  }
`;

export const StyledFilters = styled(motion.div)`
  width: max-content;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.4s linear;
  margin-bottom: 0.5rem;
  border: 2px solid
    ${({ theme, focus }) => (focus ? theme.primaryColor : "rgba(0, 0, 0, 0.5)")};

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    scale: 1.1;
  }
`;

export const ProjectCardContainer = styled(motion.div)`
  height: 40rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow-y: auto;
  /* margin-bottom: 2rem; */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    width: 100%;
    max-height: 60vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
