import { DeveloperBoard } from "@mui/icons-material";
import React from "react";
import cover from "../assets/cover.svg";
import styled from "styled-components";

const Container = styled.div`
  height: 93vh;
  /* border: 2px solid; */
  width: 80%;
  margin: auto;
  margin-top: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media only screen and (max-width: 500px) {
    height: 100vh;
    width: 88%;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;
  }
`;

const SubContainer1 = styled.div`
  width: 50%;
  padding: 1rem;
  padding-left: 4rem;

  @media only screen and (max-width: 500px) {
    width: 100%;
    padding-left: 1rem;
  }
`;

const SubContainer2 = styled.div`
  width: 50%;
  padding-right: 4rem;

  @media only screen and (max-width: 500px) {
    width: 100%;
    padding: 0;

    img {
      margin-top: 5rem;
      width: 360px;
    }
  }
`;

const Greetings = styled.div`
  font-weight: 100;
  font-size: 2.5rem;
  color: $text-primary-color;

  @media only screen and (max-width: 500px) {
    font-size: 1rem;
    line-height: 1.5;
    text-transform: uppercase;
  }
`;

const MyName = styled.div`
  font-size: 3rem;
  line-height: 1.5;
  text-transform: uppercase;

  @media only screen and (max-width: 500px) {
    font-size: 1.3rem;
    line-height: 1.6;
    text-transform: uppercase;
    margin: 0.5rem 0;
  }
`;

function Home(props) {
  return (
    <Container>
      <SubContainer1>
        <Greetings>Hey There, I'm</Greetings>
        <MyName>Shubham Sharma !</MyName>
        <div className="dynamic-text">
          <div id="static">I'm a</div>
          <div id="dynamic">
            <div id="word1">
              <span>Frontend&nbsp;Developer</span>
            </div>
            <div id="word2">Designer</div>
            <div id="word3">Optimist</div>
            <div id="word4">Seeker</div>
          </div>
        </div>
      </SubContainer1>

      <SubContainer2>
        <img src={cover} />
      </SubContainer2>
    </Container>
  );
}

export default Home;

// Developer
// creative;
// Designer
// optimist
// seeker
