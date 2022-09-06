import styled from "styled-components";

export const Container = styled.div`
  height: 93vh;
  /* border: 2px solid; */
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 500px) {
    width: 90%;
    margin: auto;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const SubContainer1 = styled.div`
  width: 50%;
  padding-left: 4rem;
  /* border: 1px solid rgb(245, 101, 57); */

  @media only screen and (max-width: 500px) {
    width: 100%;
    padding-left: 2rem;
  }
`;

export const SubContainer2 = styled.div`
  width: 48%;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 500px) {
    img {
      width: 300px;
      transform: translateX(-15%);
    }
  }
`;

export const Title = styled.div`
  font-size: 5rem;
  color: rgb(245, 101, 57);

  @media only screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const Para = styled.div`
  font-size: 1.5rem;
  line-height: 150%;

  @media only screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;
