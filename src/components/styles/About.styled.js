import styled, { ThemeContext } from "styled-components";

export const StyledAboutSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 5rem;
`;

export const StyledSkillSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media only screen and (max-width: 500px) {
    gap: 1.5rem;
  }
`;