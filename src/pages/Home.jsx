import React, {useRef} from "react";
import Clouds from "../components/Clouds";
import { Button} from "../styles/Mixin";
import { HomeContainer, IconContainer } from "../styles/Home.style";
import { motion, useInView } from "framer-motion";
import Typewriter from "typewriter-effect";
import Resume from "../assets/Resume.pdf"
//------------------------------------------

const Home = ({ homeRef }) => {
  //-------------------------------------
  //-------------------------------------

  const email = "im_shubhamsharma@outlook.com";
  return (
    <>
      <Clouds />
      <HomeContainer id="home">
        <p>Hi, I'm</p>
        <h1>Shubham Sharma !</h1>

        <Typewriter
          className="typewriter"
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

        <IconContainer>
          <a href={`https://www.linkedin.com/in/im-shubhamsharma`} target=" ">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>

          <a href={`mailto:${email}`}>
            <ion-icon name="mail-outline"></ion-icon>
          </a>

          <a href={`https://github.com/im-shubhamsharma`} target=" ">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </IconContainer>

        <Button size={"xl"}>
          <a href={Resume} download="Shubham_Resume" style={{color: "#fff"}}>
            Resume
          </a>
        </Button>

        <motion.i
          ref={homeRef}
          className="fa-solid fa-angle-down arrow"
          initial={{ y: 0 }}
          animate={{ y: 20 }}
          transition={{
            repeat: "Infinity",
            repeatType: "reverse",
            ease: "linear",
            duration: 0.5,
            type: "tween",
          }}
        ></motion.i>
      </HomeContainer>
    </>
  );
};

export default Home;
