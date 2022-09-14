import styled from "styled-components";
import {motion} from "framer-motion";

export const ContactContainer = styled(motion.div)`

`;

export const FooterContainer = styled(motion.div)``;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;

  @media only screen and (max-width: 500px) {
    gap:0.5rem;
  }
`;
export const StyledInput = styled.input`
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
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
export const StyledTextArea = styled.textarea`
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
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

export const StyledFormErrors = styled.p`
  color: ${props => props.theme.colors.primary};
  margin: 0;
  line-height: 0;
`