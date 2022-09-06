import React, { useRef, useEffect, useState } from "react";
import cover from "../assets/cover.svg";
import { gsap, Power3 } from "gsap";
import {Container, SubContainer1, SubContainer2, Greetings, MyName, DynamicTextContainer, StyledSpan} from './styles/Home.styled.js'


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
    }, 5000);

    return () => clearInterval(textInterval);
  }, []);

  const heroImg = useRef();
  const heroTitle = useRef();

  useEffect(() => {
    gsap.to(heroImg.current, {
      duration: 1,
      opacity: 1,
      x: 0,
      ease: Power3,
    });

    gsap.to(heroTitle.current, {
      duration: 1,
      x: 0,
      ease: Power3,
    });

  }, []);

  return (
    <Container>
      <SubContainer2 ref={heroImg}>
        <img src={cover} />
      </SubContainer2>

      <SubContainer1 ref={heroTitle}>
        <Greetings>Hey There, I'm</Greetings>
        <MyName>Shubham Sharma !</MyName>
        <DynamicTextContainer>
          I'm a <StyledSpan>{dynamicText}</StyledSpan>
        </DynamicTextContainer>
      </SubContainer1>
    </Container>
  );
}

export default Home;
