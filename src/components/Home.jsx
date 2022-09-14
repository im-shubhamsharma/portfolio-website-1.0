import React, { useRef, useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import {
  Container,
  SubContainer,
  Greetings,
  StyledName,
  DynamicTextContainer,
  StyledSpan,
  IconContainer,
} from "./styles/Home.styled.js";

import { StyledButton } from "./styles/Mixin";
import Clouds from "./Clouds";
import Header from "./Header";

import { motion, useAnimationControls, useInView } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "linear",
      duration: 1.5,
      type: "tween",
      when: 'beforeChidlren'
    },
  },
};


function Home({theme, setTheme}) {
  const homeRef = useRef();
  const homeIsInView = useInView(homeRef);
  const controls = useAnimationControls();

  return (
    <div id="home">
      <Header homeRef={homeRef} theme={theme} setTheme={setTheme}/>
      <Clouds />
      <Container>
        <SubContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Greetings>Hi, I'm</Greetings>
          <StyledName>Shubham Sharma !</StyledName>

          <DynamicTextContainer ref={homeRef}>
            I'm a&nbsp;
            <StyledSpan>
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Designer",
                    "Optimist",
                    "Seeker",
                    "Coder",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </StyledSpan>
          </DynamicTextContainer>

          <IconContainer>
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="mail-outline"></ion-icon>
            <ion-icon name="logo-github"></ion-icon>
          </IconContainer>

          <StyledButton size={"xl"}>Resume</StyledButton>

          <motion.i
            className="fa-solid fa-angle-down arrow"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{
              repeat: "Infinity",
              repeatType: "reverse",
              ease: "linear",
              duration: 0.5,
              type: "tween",
            }}
          ></motion.i>
        </SubContainer>
      </Container>
    </div>
  );
}

export default Home;
