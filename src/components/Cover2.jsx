import React from "react";
import {
  StyledCover,
  RightContainer,
  ColorOptions,
} from "../styles/Cover2.style";
//-----------------------------

const Cover2 = ({ setPrimaryColor }) => {
  //-------------------------
  function toggleColorPicker(e) {
      setPrimaryColor(e.target.attributes.color.value);   
  }
  //-------------------------
  return (
    <StyledCover>
      <RightContainer>
        <ColorOptions
          color={"#f51720"}
          onClick={toggleColorPicker}
        ></ColorOptions>
        <ColorOptions
          color={"#2ff3e0"}
          onClick={toggleColorPicker}
        ></ColorOptions>
        <ColorOptions
          color={"#c7f954"}
          onClick={toggleColorPicker}
        ></ColorOptions>
        <ColorOptions
          color={"rgb(255, 115, 206)"}
          onClick={toggleColorPicker}
        ></ColorOptions>
      </RightContainer>
    </StyledCover>
  );
};

export default Cover2;
