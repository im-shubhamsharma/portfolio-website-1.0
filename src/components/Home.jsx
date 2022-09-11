import React, { useRef, useEffect, useState } from "react";
import {
  Container,
  SubContainer1,
  Greetings,
  MyName,
  DynamicTextContainer,
  StyledSpan,
  StyledButton2,
  IconContainer,
} from "./styles/Home.styled.js";
import Clouds from "./Clouds";
import Header from "./Header";

function Home(props) {
  const [dynamicText, setDynamicText] = useState("Coder");

  const text = [
    "Frontend Developer",
    "Designer",
    "Optimist",
    "Seeker",
    "Coder",
  ];

  useEffect(() => {
    let i = -1;
    const textInterval = setInterval(() => {
      i++;
      setDynamicText(text[i]);
      if (i == 4) i = 0;
    }, 6000);

    return () => clearInterval(textInterval);
  }, []);


  return (
    <>
      <Clouds />
      <Container>
        <SubContainer1>
          <Greetings>Hi, I'm</Greetings>
          <MyName>Shubham Sharma !</MyName>
          <DynamicTextContainer>
            I'm a <StyledSpan>{dynamicText}</StyledSpan>
          </DynamicTextContainer>
          <IconContainer>
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="mail-outline"></ion-icon>
            <ion-icon name="logo-github"></ion-icon>
          </IconContainer>
          <StyledButton2>Resume</StyledButton2>
          <i className="fa-solid fa-angle-down arrow"></i>
        </SubContainer1>
      </Container>
      <Header />
    </>
  );
}

export default Home;
