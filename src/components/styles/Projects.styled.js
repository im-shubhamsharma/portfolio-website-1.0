import styled from "styled-components";


export const ProjectCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media only screen and (max-width: 500px) {
    /* height: auto; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:1rem;
  }
`;

