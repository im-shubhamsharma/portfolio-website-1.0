import { DeveloperBoard } from "@mui/icons-material";
import React from "react";

function Home(props) {
  return (
    <div className="home">
      <div className="image"></div>
      <h1 id="hey">Hey There, I'm</h1>
      <h1 id="name">Shubham Sharma!</h1>
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
    </div>
  );
}

export default Home;

// Developer
// creative;
// Designer
// optimist
// seeker
