import styled from "styled-components";

export const ProjectContainer = styled.div`
  /* border: 2px solid green; */

  scroll-snap-align: start;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  padding-top: 10vh;

  @media only screen and (max-width: 500px) {
    scroll-snap-align: none;
    height: auto;
  }
`;

export const SubTitle = styled.h3`
  
`
export const Title = styled.h1`

`


export const SubContainer1 = styled.div`
  /* border : 2px solid red; */

  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const ProjectCardContainer = styled.div`
  /* border: 2px solid yellow; */

  width: 60%;
  margin: auto;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;

  @media only screen and (max-width: 500px) {
    width: 100%;
    gap: 0.2rem;
  }
`;

