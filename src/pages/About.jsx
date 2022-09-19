import React, { useRef, useEffect } from "react";
import { Container, Title, SubTitle, Para, Button } from "../styles/Mixin";
import {
  StyledAboutSection,
  StyledSkillSection,
  ButtonContainer,
  SkillsButton,
} from "../styles/About.style";
import { skills } from "../utils/constants";
import { motion } from "framer-motion";
import { FadeIn } from "../utils/animation";

//--------------Icons for skills section-----------
import reactLogo from "../assets/react.svg";
//-----------------------------------------------

// const cardVariants = {
//   offscreen: {
//     opacity: 0,
//     y: 300,
//   },
//   onscreen: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };


const About = () => {
  //------------------------------------

  //------------------------------------

  const skillsElem = skills.map((skill, i) => (
    <SkillsButton size={"md"} key={skill.id} variants={FadeIn}>
      <span className="img">
        <img src={skill.logo} />
      </span>
      <span className="title">{skill.name}</span>
    </SkillsButton>
  ));

  return (
    
    <Container
      id="about"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 1 }}
    >
      <StyledAboutSection variants={FadeIn}>
        <div>
          <SubTitle>About</SubTitle>
          <Title>Me</Title>
        </div>
        <div>
          <Para>
            <motion.span>
              Well hello there! My name is Shubham Sharma, I am a self-taught
              passionate Web developer from India.
            </motion.span>
            <br />
            <motion.span>
              I am currently working on improving my React skills by building
              various projects to enhance my abilities.
            </motion.span>
            <motion.span>
              I am currently also learning Data Structures & Algorithms and
              enjoys solving DSA problems.
            </motion.span>
          </Para>
        </div>
      </StyledAboutSection>

      <StyledSkillSection variants={FadeIn}>
        <div>
          <SubTitle>Skills</SubTitle>
          <Title>Technologies and Tools</Title>
        </div>
        <ButtonContainer variants={FadeIn}>{skillsElem}</ButtonContainer>
      </StyledSkillSection>
    </Container>
  );
};

export default About;
