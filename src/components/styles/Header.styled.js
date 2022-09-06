import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.div`
  height: 5vh;
  display: flex;
  justify-content: space-between;
  background-color: #232946;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.5rem 10rem;
  z-index: 100;
  transform: translateY(-800%);
`;


export const StyledLogo = styled.div`
  flex:1;
  color: rgb(245, 101, 57);
  font-size: 2rem;
`;

export const StyledNav = styled.nav`
  flex: 2;
  @include flex-even();
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.2rem;
  
`;

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  font-weight: 600;
  font-size: 1.3rem;
`;


