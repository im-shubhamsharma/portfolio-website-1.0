import styled, { ThemeContext } from "styled-components";
import {motion} from 'framer-motion'

export const StyledAboutSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 5rem;

  @media only screen and (max-width: 500px) {
    margin-bottom: 0;
  }
`;

export const StyledSkillSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media only screen and (max-width: 500px) {
    gap: 1.5rem;
  }
`;