import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/about.svg";

const Container = styled.div`
  height: 93vh;
  /* border: 2px solid; */
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 500px) {
    width: 90%;
    margin: auto;
    flex-direction: column;
    justify-content: space-around;
  }
  
`;

const SubContainer1 = styled.div`
  width: 50%;
  padding-left: 4rem;
  /* border: 1px solid rgb(245, 101, 57); */

  @media only screen and (max-width: 500px) {
    width: 100%;
    padding-left: 2rem;
  }
`;

const SubContainer2 = styled.div`
  width: 48%;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 500px) {
    img {
        width: 300px;
        transform: translateX(-15%);
    }
  }
`;

const Title = styled.div`
  font-size: 5rem;
  color: rgb(245, 101, 57);

  @media only screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

const Para = styled.div`
  font-size: 1.5rem;
  line-height: 150%;

  @media only screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

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
