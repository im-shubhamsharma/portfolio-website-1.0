import styled from "styled-components";
import {motion} from "framer-motion"

export const ContactContainer = styled(motion.div)`
  margin-top: 2.5rem;

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
    margin-top: 6rem;
  }
  @media (max-width: 480px) {
  }
`;

export const FooterContainer = styled(motion.div)`
  margin-top: auto;
  margin-bottom: 2rem;

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

export const StyledForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;

  @media only screen and (max-width: 500px) {
    gap: 0.5rem;
  }
`;
export const StyledInput = styled(motion.input)`
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  padding: 1rem;
  border: 1px solid
    ${({ theme }) =>
      theme.name === "light"
        ? "rgba(0, 0, 0, 0.3)"
        : "rgba(255, 255, 255, 0.1)"};
  transition: 0.3s linear;

  &:focus {
    scale: 1.02;
  }
`;
export const StyledTextArea = styled(motion.textarea)`
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  padding: 1rem;
  border: 1px solid
    ${({ theme }) =>
      theme.name === "light"
        ? "rgba(0, 0, 0, 0.3)"
        : "rgba(255, 255, 255, 0.1)"};
  transition: 0.3s linear;

  &:focus {
    scale: 1.02;
  }
`;

export const StyledFormErrors = styled(motion.p)`
  color: ${(props) => props.theme.primaryColor};
  margin: 0;
  line-height: 0;
`;
