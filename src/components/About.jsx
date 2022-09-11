import React, { useRef, useEffect } from "react";
import {
  StyledAboutSection,
  ButtonContainer,
  StyledSkillSection,
} from "./styles/About.styled";

import { skills } from "../utils/constants";

import {
  StyledSection,
  StyledContainer,
  StyledTitle,
  SubTitle,
  StyledPara,
  StyledButton,
} from "./styles/Mixin";

import muiIcon from "../assets/icons/material.png";
import jsIcon from "../assets/icons/java-script.png";

function About(props) {
  const aboutRef1 = useRef();
  const aboutRef2 = useRef();

  const skillsElem = skills.map((skill) => (
    <StyledButton size={"md"} key={skill.id}>
      <span className="img">
        <img src={`${skill.logo}`} />
      </span>
      <span className="title">{skill.name}</span>
    </StyledButton>
  ));

  return (
    <StyledSection>
      <StyledContainer>
        <StyledAboutSection>
          <div>
            <SubTitle>About</SubTitle>
            <StyledTitle>Me</StyledTitle>
          </div>
          <StyledPara>
            Well hello there! My name is Shubham Sharma, I am a self-taught
            passionate Web developer from India. <br /> I am currently working
            on improving my React skills by building various projects to enhance
            my abilities. I am currently also learning Data Structures &
            Algorithms and enjoys solving DSA problems.
          </StyledPara>
        </StyledAboutSection>

        <StyledSkillSection>
          <div>
            <SubTitle>Skills</SubTitle>
            <StyledTitle>Technologies and Tools</StyledTitle>
          </div>
          <ButtonContainer>{skillsElem}</ButtonContainer>
        </StyledSkillSection>
      </StyledContainer>
    </StyledSection>
  );
}

export default About;
