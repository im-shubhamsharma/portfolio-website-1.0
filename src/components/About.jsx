import React, { useRef, useEffect } from "react";
import {
  AboutContainer,
  SubContainer1,
  StyledTitle,
  StyledPara,
  ButtonContainer,
  StyledButton,
  SubTitle,
} from "./styles/About.styled";
import muiIcon from "../assets/icons/material.png"
import jsIcon from "../assets/icons/java-script.png"
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
          passionate Web developer from India. <br /> I am currently
          working on improving my React skills by building various projects to
          enhance my abilities. I am currently also learning Data Structures &
          Algorithms and enjoys solving DSA problems.
        </StyledPara>
        <StyledTitle>Technologies and Tools</StyledTitle>
        <ButtonContainer>
          <StyledButton>
            <span className="img">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
            </span>
            <span className="title">React</span>
          </StyledButton>
          <StyledButton>
            <span className="img">
              <img src={jsIcon} />
            </span>
            <span className="title">JavaScript</span>
          </StyledButton>

          <StyledButton>
            <span className="img">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            </span>
            <span className="title">HTML</span>
          </StyledButton>

          <StyledButton>
            <span className="img">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
            </span>
            <span className="title">CSS</span>
          </StyledButton>

          <StyledButton>
            <span className="img">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" />
            </span>
            <span className="title">Sass</span>
          </StyledButton>

          <StyledButton>
            <span className="img">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" />
            </span>
            <span className="title">Redux</span>
          </StyledButton>

          <StyledButton>
            <span className="img">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" />
            </span>
            <span className="title">Git</span>
          </StyledButton>

          <StyledButton>
            <span className="img">
              <img src={muiIcon} />
            </span>
            <span className="title">Mui</span>
          </StyledButton>
        </ButtonContainer>
      </SubContainer1>
    </AboutContainer>
  );
}

export default About;
