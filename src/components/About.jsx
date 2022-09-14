import React, { useRef, useEffect } from "react";
import {
  StyledAboutSection,
  ButtonContainer,
  StyledSkillSection,
} from "./styles/About.styled";
import { motion, useAnimationControls, useInView } from "framer-motion";

import { skills } from "../utils/constants";

import {
  StyledSection,
  StyledContainer,
  StyledTitle,
  SubTitle,
  StyledPara,
  StyledButton,
} from "./styles/Mixin";
//---------------------------------------------------------------

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

//------------------------------------------------------------

function About(props) {
  const aboutRef = useRef();
  const aboutIsInView = useInView(aboutRef);
  const controls = useAnimationControls();

  useEffect(() => {
    if (aboutIsInView) {
      controls.start("visible");
    }
    if (!aboutIsInView) {
      controls.start("hidden");
    }
  }, [aboutIsInView]);

  const skillsElem = skills.map((skill, i) => (
    <StyledButton size={"md"} key={skill.id} variants={childrenVariants}>
      <span className="img">
        <img src={`${skill.logo}`} />
      </span>
      <span className="title">{skill.name}</span>
    </StyledButton>
  ));

  return (
    <StyledSection id="about">
      <StyledContainer variants={containerVariants} animate={controls}>
        <StyledAboutSection ref={aboutRef}>
          <motion.div variants={childrenVariants}>
            <SubTitle>About</SubTitle>
            <StyledTitle>Me</StyledTitle>
          </motion.div>
          <motion.div variants={childrenVariants}>
            <StyledPara>
              Well hello there! My name is Shubham Sharma, I am a self-taught
              passionate Web developer from India. <br /> I am currently working
              on improving my React skills by building various projects to
              enhance my abilities. I am currently also learning Data Structures
              & Algorithms and enjoys solving DSA problems.
            </StyledPara>
          </motion.div>
        </StyledAboutSection>

        <StyledSkillSection>
          <motion.div variants={childrenVariants}>
            <SubTitle>Skills</SubTitle>
            <StyledTitle>Technologies and Tools</StyledTitle>
          </motion.div>
          <ButtonContainer>{skillsElem}</ButtonContainer>
        </StyledSkillSection>
      </StyledContainer>
    </StyledSection>
  );
}

export default About;
