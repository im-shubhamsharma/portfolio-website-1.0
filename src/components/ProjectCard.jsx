import React from "react";
import {
  CardContainer,
  CardContent,
  ButtonContainer,
  StyledDesc,
} from "./styles/ProjectCard.styled";

import { SubTitle, StyledButton } from "./styles/Mixin";

const ProjectCard = (props) => {
  const { id, name, desc, livelink, codelink, tech } = props.project;

  return (
    <CardContainer>
      <CardContent>
        <SubTitle>{name}</SubTitle>
        <StyledDesc>Tech Used: {tech}</StyledDesc>
        <StyledDesc>{desc}</StyledDesc>
      </CardContent>

      <ButtonContainer>
        <a
          href={codelink}
          target="_blank"
          style={{ textDecoration: "none"}}
        >
          <StyledButton>
            <ion-icon name="logo-github"></ion-icon>
            Code
          </StyledButton>
        </a>

        <a
          href={livelink}
          target="_blank"
          style={{ textDecoration: "none"}}
        >
          <StyledButton>
            <ion-icon name="arrow-redo-outline"></ion-icon>
            Live
          </StyledButton>
        </a>
      </ButtonContainer>
    </CardContainer>
  );
};

export default ProjectCard;
