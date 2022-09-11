import styled from "styled-components";

export const ContactContainer = styled.div`
  scroll-snap-align: start;
  width: 100%;
  height: 100vh;
  display: flex;

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
  justify-content: flex-start;
  padding: 2rem;

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const Title = styled.h1``;
export const SubTitle = styled.h3``;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  `;
export const StyledInput = styled.input`
  background-color: transparent;
  color: #fff;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: 0.3s linear;
  
  &:focus {
    scale: 1.02;
  }
  `;
export const StyledTextArea = styled.textarea`
  background-color: transparent;
  color: #fff;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: 0.3s linear;

  &:focus {
    scale: 1.02;
  }
`;

export const StyledButton = styled.button`
  width: 16rem;
  height: 3rem;
  font-size: 2rem;
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
  transition: 0.3s linear;

  display: flex;
  justify-content: center;
  align-items: center;
  gap:1rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    scale: 1.05;
    backdrop-filter: blur(0);
  }

  @media only screen and (max-width: 500px) {
    width: 13rem;
    height: 2.5rem;
    font-size: 1.4rem;
  }
`;
