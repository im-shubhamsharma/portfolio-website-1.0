import React from "react";
import { StyledCover, StyledSun } from "./styles/Clouds.styled";
import sun from "../assets/sun.png";

function Clouds(props) {
  return (
    <StyledCover>
      <div id="background-wrap">
        <StyledSun
         initial={{rotate:-360}}
         animate={{rotate:360}}
         transition={{repeat:"Infinity", repeatType:"loop", type:"tween", duration:50}}
        >
          <img src={sun} />
        </StyledSun>

        <div class="x1">
          <div class="cloud"></div>
        </div>

        <div class="x5" style={{ position: "relative", left: "-30rem" }}>
          <div class="cloud"></div>
        </div>

        <div class="x2" style={{ position: "relative", left: "-20rem" }}>
          <div class="cloud"></div>
        </div>

        <div class="x3">
          <div class="cloud"></div>
        </div>

        <div class="x4">
          <div class="cloud"></div>
        </div>

        <div class="x5">
          <div class="cloud"></div>
        </div>

        <div class="x2" style={{ position: "relative", left: "-40rem" }}>
          <div class="cloud"></div>
        </div>

        <div class="x1" style={{ position: "relative", left: "-20rem" }}>
          <div class="cloud"></div>
        </div>

        <div class="x3" style={{ position: "relative", left: "-20rem" }}>
          <div class="cloud"></div>
        </div>
      </div>
    </StyledCover>
  );
}

export default Clouds;
