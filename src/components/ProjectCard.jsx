import React from "react";
import {
  CardContainer,
  CardMedia,
  CardContent,
  StyledTitle,
  SubTitle,
  StyledPara,
  ButtonContainer,
  StyledButton,
} from "./styles/ProjectCard.styled";
import wolfee from "../assets/logo.jpeg";
import githubIcon from "../assets/icons/github.png";

const ProjectCard = () => {
  return (
    <CardContainer>
      {/* <CardMedia>
        <img src={wolfee} />
      </CardMedia> */}

      <CardContent>
        <StyledTitle>Project Title</StyledTitle>
        <SubTitle>Tech used : React, Material UI</SubTitle>
        <StyledPara>
          Description:  ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem
        </StyledPara>
      </CardContent>

      <ButtonContainer>
        <StyledButton>
          <ion-icon name="logo-github"></ion-icon>

          <span className="title">Code</span>
        </StyledButton>

        <StyledButton>
          <ion-icon name="arrow-redo-outline"></ion-icon>

          <span className="title">Go Live</span>
        </StyledButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default ProjectCard;
