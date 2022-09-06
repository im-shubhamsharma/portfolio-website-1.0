import React, {useRef, useEffect} from "react";
import aboutImg from "../assets/about.svg";
import {Container, SubContainer1, SubContainer2, Title, Para} from "./styles/About.styled"


function About(props) {

  
  return (
    <Container>
      <SubContainer1>
        <Title>About</Title>
        <br />
        <br />
        <Para>
          Hi, I'm Shubham Sharma, a self-taught passionate FrontEnd developer
          from India. <br />
          <br />I am proficient in HTML, CSS, SCSS, JavaScript and have built
          some projects with React also. <br />
          <br /> I am currently working on improving my React skills by building
          various projects to enhance my abilities.
          <br />
          <br /> I am also currently learning DSA and enjoys solving DSA
          problems.
        </Para>
      </SubContainer1>
      <SubContainer2>
        <img src={aboutImg} />
      </SubContainer2>
    </Container>
  );
}

export default About;
