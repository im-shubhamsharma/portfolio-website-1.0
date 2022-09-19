import React, { useEffect } from "react";
import {
  FooterSection,
  IconsContainer,
  TextContainer,
} from "../styles/Footer.style";


import twitter from "../assets/twitter.svg";
import linkdin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import love from "../assets/love.png";
import coffee from "../assets/coffee.png";
import copyright from "../assets/copyright.png";
import music from "../assets/music.png";


const Footer = () => {
  //----------------------
  // animation

  //----------------------
  return (
    <FooterSection >
      {/* <IconsContainer >
        <img src={github} />
        <img src={linkdin} />
        <img src={twitter} />
      </IconsContainer> */}

      <TextContainer >
        Email : &nbsp;&nbsp; <span>im_shubhamsharma@outlook.com</span>
      </TextContainer>
      <TextContainer>
        Crafted with &nbsp; <img src={love} /> &nbsp; <img src={music} /> &nbsp;
        & &nbsp;
        <img src={coffee} />
        &nbsp; by &nbsp; <span id="sign"> Shubham Sharma </span>
      </TextContainer>
      <TextContainer>
        {" "}
        <img src={copyright} /> &nbsp; 2022 - All rights reserved
      </TextContainer>
    </FooterSection>
  );
};

export default Footer;
