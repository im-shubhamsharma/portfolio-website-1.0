import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  overflow: none;
  z-index: 1;
  scroll-snap-align: start;
  padding: 2rem;

  @media only screen and (max-width: 500px) {
    height: 100vh;
    width: 100%;
    padding: 5vh 0;
    scroll-snap-align: none;
  }
`;

const bounce = keyframes`
   0%{
      transform: translateY(0);
   }
   25%{
      transform: translateY(-30px);
   }
   50%{
      transform: translateY(-30px);
   }
   1000%{
      transform: translateY(0);
   }
`;

const bounce2 = keyframes`
   0%{
      transform: translateY(0);
      
   }
   25%{
      transform: translateY(-15px);
   
   }
   50%{
      transform: translateY(-15px);
   
   }
   1000%{
      transform: translateY(0);
    
   }
`;

export const SubContainer1 = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 5rem;

  .arrow {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    top: 13rem;
    animation: ${bounce} 2s linear infinite;
  }

  @media only screen and (max-width: 500px) {
    flex: 1;
    width: 100%;
    justify-content: end;
    padding: 2rem 0 2rem 2rem;
    font-size: 2.2rem;

    .arrow {
      margin-top: 10rem;
      font-size: 2rem;
      top: 0;
      left: 0;
      animation: ${bounce2} 2s linear infinite;
    }
  }
`;

export const Greetings = styled.div`

  
`;

export const MyName = styled.div`
  line-height: 1.5;
  text-transform: uppercase;

  @media only screen and (max-width: 500px) {
    margin: 0.5rem 0;
  }
`;

export const DynamicTextContainer = styled.div`
  line-height: 1.5;
  text-transform: uppercase;

  @media only screen and (max-width: 500px) {
    text-transform: uppercase;
    font-size: 1.8rem;
  }
`;

export const fadeIn = keyframes`
     0%{
       opacity:0;
     }
     20%{
       opacity:100%;
     }
     40%{
       opacity:100%;
     }
     80%{
       opacity:100%;
     }
     100%{
       opacity:0;
     }
`;

export const StyledSpan = styled.span`
  text-transform: uppercase;
  color: white;
  overflow: hidden;
  animation: ${fadeIn} 6s ease-in-out infinite;
`;


export const StyledButton2 = styled.button`
  width: 21rem;
  height: 3.5rem;
  font-size: 2.2rem;
  border: 0;
  text-decoration: none;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
  margin: 0.5rem 0;
  transition: all 0.3s linear 0s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    scale: 1.05;
    border: 2px solid white;
    backdrop-filter: blur(0);
  }

  @media only screen and (max-width: 500px) {
    width: 13rem;
    height: 2.5rem;
    font-size: 1.4rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 1rem 0;
  transition: all 0.3s linear 0s;

  ion-icon {
    cursor: pointer;
    transition: 0.3s linear;
    color: white;

    &:hover {
      scale: 1.05;
    }

    @media only screen and (max-width: 500px) {
      font-size: 3.2rem;
    }
  }
`;
