import styled, { ThemeContext } from "styled-components";

export const AboutContainer = styled.div`
  scroll-snap-align: start;
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 500px) {
    scroll-snap-align: none;
  }
`;

export const SubContainer1 = styled.div`
  width: 60%;
  margin: auto;
  /* border : 2px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  padding-top: 10vh;
  overflow: hidden;

  @media only screen and (max-width: 500px) {
    height: 100vh;
    width: 100%;
    margin-top: 2rem;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  position: relative;

  @media only screen and (max-width: 500px) {
    font-size: 1.8rem;
  }
`;

export const SubTitle = styled.h3`
  margin-right: auto;

  @media only screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const StyledPara = styled.p`
  font-size: 2rem;
  margin-bottom: 5rem;

  @media only screen and (max-width: 500px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const StyledList = styled.ul`
  font-size: 2rem;
  margin-top: 2rem;

  @media only screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media only screen and (max-width: 500px) {
    gap: 1rem;
  }
`;

export const StyledButton = styled.button`
  width: 15rem;
  height: 3.5rem;
  font-size: 2rem;
  border: 0;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: rgba(255, 255, 255, 0.8);
  /* letter-spacing: 2px; */
  cursor: pointer;
  margin: 0.5rem 0;
  transition: 0.3s linear;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 1rem;
  gap: 1rem;

  .img {
    height: inherit;
    width: 3.5rem;

    img {
      width: 100%;
      height: auto;
    }
  }

  .title {
    font-size: 1.5rem;
  }

  &:hover {
    scale: 1.1;
  }

  @media only screen and (max-width: 500px) {
    width: 10rem;
    height: 1.6rem;
    font-size: 1rem;
    gap: 0.5rem;
    padding: 1.5rem 1rem;

    .img {
      height: inherit;
      width: 2rem;

      img {
        width: 100%;
        height: auto;
      }
    }

    .title {
      font-size: 1rem;
    }
  }
`;