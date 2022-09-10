import styled from "styled-components";

export const AboutContainer = styled.div`
  scroll-snap-align: start;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  
`;

export const SubContainer1 = styled.div`
  width: 60%;
  margin: auto;
  border : 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  margin-top: 10rem;
  overflow: hidden;

  @media only screen and (max-width: 500px) {
    height: 90vh;
    width: 100%;
    margin-top: 5rem;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  position: relative;

  @media only screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h3`
  margin-right: auto;

`;

export const StyledPara = styled.p`
  font-size: 2rem;
  margin-bottom: 5rem;

  @media only screen and (max-width: 500px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const StyledList = styled.ul`
  font-size: 2rem;
  margin-top: 2rem;

  @media only screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;