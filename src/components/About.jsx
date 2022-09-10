import React, { useRef, useEffect } from "react";
import {
  AboutContainer,
  SubContainer1,
  StyledTitle,
  StyledPara,
  StyledList,
  SubTitle,
} from "./styles/About.styled";
import Header from "./Header";

function About(props) {
  const aboutRef1 = useRef();
  const aboutRef2 = useRef();

  return (
    <AboutContainer>
      <SubContainer1>
        <SubTitle>About</SubTitle>
        <StyledTitle>Me</StyledTitle>
        <StyledPara>
          Well hello there! My name is Shubham Sharma, I am a self-taught
          passionate FrontEnd developer from India. <br /> I am currently
          working on improving my React skills by building various projects to
          enhance my abilities. I am currently also learning Data Structures &
          Algorithms and enjoys solving DSA problems.
        </StyledPara>
        <StyledTitle>Interests</StyledTitle>
        <StyledPara>
          Apart for web developing and solving DSA problems my interests are :
          <StyledList>
            <li>Online Gaming</li>
            <li>Football</li>
            <li>Cricket</li>
          </StyledList>
        </StyledPara>
      </SubContainer1>
    </AboutContainer>
  );
}

export default About;
