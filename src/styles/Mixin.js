import styled from "styled-components";
import {motion} from "framer-motion"

export const Container = styled(motion.div)`
  /* scroll-snap-align: end; */
  height: 94vh;
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 7vh;
  padding: 5rem;
  overflow: hidden;
  z-index: 10;

  @media (max-width: 1080px) {
    width: 100%;
    padding: 5rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 2rem;
  }
  @media (max-width: 480px) {
    width: 100%;
    padding: 0 1.5rem;
  }
`;

export const Title = styled(motion.h1)`
  font-size: 2.2rem;

  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const SubTitle = styled(motion.h3)`
  color: ${({ theme }) => theme.primaryColor};

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Para = styled(motion.p)`
  font-size: 1.4rem;
  line-height: 150%;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

// size xl, md, sm
export const Button = styled(motion.button)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: max-content;

  height: ${({ size }) =>
    size === "xl" ? "4.5rem" : size === "md" ? "3.5rem" : "2rem"};

  gap: 1rem;

  padding: ${({ size }) =>
    size === "xl" ? "1.5rem" : size === "md" ? "1rem" : "0.8rem"};

  font-size: ${({ size }) =>
    size === "xl" ? "2.2rem" : size === "md" ? "1.2rem" : "1rem" || "1rem"};

  border: 0;

  background-color: ${({ theme }) =>
    theme.name === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"};
  backdrop-filter: blur(10px);

  text-decoration: none;
  color: ${({ theme, size }) => (size === "xl" ? "#fff" : theme.primaryColor)};
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s linear 0s;

  &:hover {
    scale: 1.1;
  }

  .img {
    width: 2.5rem;

    img {
      width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    height: ${({ size }) => (size === "sm" ? "auto" : "2.5rem")};
    font-size: ${({ size }) =>
      size === "xl" ? "1.4rem" : (size === "sm" ? "0.6rem" : "1rem") || "1rem"};
    gap: 0.5rem;
    padding: ${({ size }) => (size === "sm" ? "2px" : "1rem")};

    .img {
      width: 2rem;
    }
  }

  @media (max-width: 1080px) {
    width: ${({ size }) =>
      size === "xl" ? "9rem" : (size === "md" ? "12rem" : "6rem") || "1rem"};
    font-size: ${({ size }) =>
      size === "xl" ? "1.4rem" : (size === "md" ? "1.2rem" : "1rem") || "1rem"};
  }
  @media (max-width: 768px) {
    width: ${({ size }) =>
      size === "xl" ? "8rem" : (size === "md" ? "12rem" : "6rem") || "1rem"};
    font-size: ${({ size }) =>
      size === "xl" ? "1.4rem" : (size === "md" ? "1.2rem" : "1rem") || "1rem"};
  }
  @media (max-width: 480px) {
    width: ${({ size }) =>
      size === "xl" ? "8rem" : (size === "md" ? "7rem" : "4rem") || "1rem"};
    font-size: ${({ size }) =>
      size === "xl" ? "1.4rem" : (size === "md" ? "1rem" : "0.8rem") || "1rem"};
  }
`;
