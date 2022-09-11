import styled from "styled-components";

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  /* background-color: ${({ theme }) => theme.colors.background}; */

  @media only screen and (max-width: 500px) {
  }
`;

export const StyledNav = styled.nav`
  position: relative;
  width: 60%;
  margin: auto;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;

  @media only screen and (max-width: 500px) {
    width: 100%;
    gap: 0.5rem;
    padding: 0 1rem;
  }
`;

export const SubTitle = styled.h3`
  margin-right: auto;
`;

