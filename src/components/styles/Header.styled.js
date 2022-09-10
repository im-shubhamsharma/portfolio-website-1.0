import styled from "styled-components";

export const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 500px) {
    
  }
`;

export const StyledNav = styled.nav`
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