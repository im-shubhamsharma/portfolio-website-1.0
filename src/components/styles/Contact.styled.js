import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  `;
export const StyledInput = styled.input`
  background-color: transparent;
  color: #fff;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: 0.3s linear;
  
  &:focus {
    scale: 1.02;
  }
  `;
export const StyledTextArea = styled.textarea`
  background-color: transparent;
  color: #fff;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
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