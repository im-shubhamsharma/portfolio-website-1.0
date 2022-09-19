import styled, { ThemeContext } from "styled-components";
import {motion} from "framer-motion"

export const StyledAboutSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 5rem;

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 480px) {
    margin-bottom: 2rem;
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

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    gap: 0.6rem;
  }
`;

export const SkillsButton = styled(motion.button)`
  font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
  height: 3rem;
  gap: 1rem;
  padding: 2rem 1rem;
  border: 0;

  background-color: ${({ theme }) =>
    theme.name === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"};
  backdrop-filter: blur(10px);

  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 400;
  color: ${props => props.theme.textColor};
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s linear 0s;

  &:hover {
    scale: 1.1;
  }

  img {
    width: 3rem;
  }

  @media (max-width: 1080px) {
    width: 13rem;
    height: 4rem;
    font-size: 1.3rem;
    padding: 2.2rem 1rem;

    img {
      width: 3rem;
    }
  }
  @media (max-width: 768px) {
    width: 12rem;
    height: 4rem;
    font-size: 1.1rem;
    padding: 1.5rem 1rem;

    img {
      width: 3rem;
    }
  }
  @media (max-width: 480px) {
    width: 10rem;
    height: 3rem;
    font-size: 1rem;
    padding: 0 0.5rem;
    gap: 0.6rem;

    img {
      width: 2.4rem;
    }
  }
`;
