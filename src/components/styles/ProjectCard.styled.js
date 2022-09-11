import styled from "styled-components";

export const CardContainer = styled.div`
  box-shadow: rgba(10px, 10px, 10px, 0.08) 0px 10px 30px 0px;
  background-color: rgb(34, 36, 38);
  border: 1px solid rgba(0, 0, 0, 1);
  transition: all 0.3s linear 0s;
  margin-bottom: 30px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  /* border:2px solid; */

  width: 20rem;
  height: 20rem;
  overflow: hidden;

  &:hover {
    scale: 1.1;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 15rem;
  }
`;



export const CardMedia = styled.div`
  flex:1;

  img{
    width:100%;
    height:100%;
  }
`;
export const CardContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 2rem;
  /* color: ${({theme})=> theme.colors.textMain}; */

  @media only screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const SubTitle = styled.h3`
  margin-right: auto;

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const StyledPara = styled.p`
  font-size: 1rem;

  @media only screen and (max-width: 500px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  /* flex-wrap: wrap; */
`;

export const StyledButton = styled.button`
  width: 50%;
  height: 2rem;
  font-size: 1rem;
  border: 0;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: 0.3s linear;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;