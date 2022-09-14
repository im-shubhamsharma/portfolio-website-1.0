import React from 'react'
import {
  FooterSection,
  IconsContainer,
  TextContainer,

} from "./styles/Footer.styled";
import twitter from "../assets/icons/twitter.svg";
import linkdin from "../assets/icons/linkdin.svg";
import github from "../assets/icons/github.svg";
import love from "../assets/icons/love.png";
import coffee from "../assets/icons/coffee.png"
import copyright from "../assets/icons/copyright.png"
import music from "../assets/icons/music.png"

const Footer = () => {
  return (
    <FooterSection>
      <IconsContainer>
        <img src={github} />
        <img src={linkdin} />
        <img src={twitter} />
      </IconsContainer>

      <TextContainer>
        Email : &nbsp;&nbsp; <span>im_shubhamsharma@outlook.com</span>
      </TextContainer>
      <TextContainer>
        Crafted with &nbsp; <img src={love} /> &nbsp; <img src={music} /> &nbsp;
        <img src={coffee} />
        &nbsp; by &nbsp; <span id="sign"> Shubham Sharma </span>
      </TextContainer>
      <TextContainer>
        {" "}
        <img src={copyright} /> &nbsp; 2022 - All rights reserved
      </TextContainer>
    </FooterSection>
  );
}

export default Footer