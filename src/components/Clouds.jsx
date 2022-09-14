import React from "react";
import { StyledCover, StyledSun } from "./styles/Clouds.styled";
import sun from "../assets/sun.png";

function Clouds(props) {
  return (
    <StyledCover>
      <div id="background-wrap">
        <StyledSun
          initial={{ rotate: -360 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: "Infinity",
            repeatType: "loop",
            type: "tween",
            duration: 50,
          }}
        >
          <img src={sun} />
        </StyledSun>

        <div className="x1">
          <div className="cloud"></div>
        </div>

        <div className="x5" style={{ position: "relative", left: "-30rem" }}>
          <div className="cloud"></div>
        </div>

        <div className="x2" style={{ position: "relative", left: "-20rem" }}>
          <div className="cloud"></div>
        </div>

        <div className="x3">
          <div className="cloud"></div>
        </div>

        <div className="x4">
          <div className="cloud"></div>
        </div>

        <div className="x5">
          <div className="cloud"></div>
        </div>

        <div className="x2" style={{ position: "relative", left: "-40rem" }}>
          <div className="cloud"></div>
        </div>

        <div className="x1" style={{ position: "relative", left: "-20rem" }}>
          <div className="cloud"></div>
        </div>

        <div className="x3" style={{ position: "relative", left: "-20rem" }}>
          <div className="cloud"></div>
        </div>
      </div>
    </StyledCover>
  );
}

export default Clouds;
