import React from 'react'
import { StyledCover, LeftContainer } from "../styles/Cover.style";

const Cover = ({ homeView }) => {
  const email = "im_shubhamsharma@outlook.com";
  return (
    <StyledCover>
      <LeftContainer>
        <a href={`https://github.com/im-shubhamsharma`} target=" ">
          <i class="fa-brands fa-github fa-icons"></i>
        </a>

        <a href={`https://www.linkedin.com/in/im-shubhamsharma`} target=" ">
          <i class="fa-brands fa-linkedin fa-icons"></i>
        </a>

        <a href={""}>
          <i class="fa-brands fa-twitter fa-icons"></i>
        </a>

        <a href={`mailto:${email}`}>
          <i class="fa-solid fa-envelope fa-icons"></i>
        </a>
      </LeftContainer>
    </StyledCover>
  );
};

export default Cover