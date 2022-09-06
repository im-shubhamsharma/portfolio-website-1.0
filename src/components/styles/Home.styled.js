import styled, {keyframes} from "styled-components";


export const Container = styled.div`
  height: 93vh;
  /* border: 2px solid; */
  width: 80%;
  margin: auto;
  margin-top: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media only screen and (max-width: 500px) {
    height: 100vh;
    width: 88%;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;
  }
`;

export const SubContainer1 = styled.div`
  width: 50%;
  padding: 1rem;
  padding-left: 4rem;
  transform: translateX(100%);

  @media only screen and (max-width: 500px) {
    position: relative;
    top: -400px;
    left: 20px;
    width: 100%;
    padding-left: 1rem;
  }
`;

export const SubContainer2 = styled.div`
  width: 50%;
  padding-right: 4rem;
  transform: translateX(-100%);
  opacity: 0;

  @media only screen and (max-width: 500px) {
    position: relative;
    top: 100px;
    width: 100%;
    padding: 0;

    img {
      margin-top: 5rem;
      width: 360px;
    }
  }
`;

export const Greetings = styled.div`
  font-weight: 100;
  font-size: 2.5rem;
  color: $text-primary-color;

  @media only screen and (max-width: 500px) {
    font-size: 1rem;
    line-height: 1.5;
    text-transform: uppercase;
  }
`;

export const MyName = styled.div`
  font-size: 3rem;
  line-height: 1.5;
  text-transform: uppercase;

  @media only screen and (max-width: 500px) {
    font-size: 1.3rem;
    line-height: 1.6;
    text-transform: uppercase;
    margin: 0.5rem 0;
  }
`;

export const DynamicTextContainer = styled.div`
  font-size: 2rem;
  line-height: 1.5;
  text-transform: uppercase;

  @media only screen and (max-width: 500px) {
    font-size: 1.1rem;
    line-height: 1.6;
    text-transform: uppercase;
  }
`;

export const typewriter = keyframes`
     0%{
       left:0;
     }
     20%{
       left:100%;
     }
     40%{
       left:100%;
     }
     80%{
       left:100%;
     }
     100%{
       left:0;
     }
`;

export const StyledSpan = styled.span`
  position: relative;
  color: rgb(245, 101, 57);

  &:before {
    content: "";
    background-color: #232946;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    /* opacity: 0.8; */
    animation: ${typewriter} 5s ease-in-out infinite;
  }
`;