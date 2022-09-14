import React from "react";
import {
  CardContainer,
  CardContent,
  ButtonContainer,
  StyledDesc,
} from "./styles/ProjectCard.styled";

import { SubTitle, StyledButton } from "./styles/Mixin";

//----------------------------------------------------

const ButtonVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard = (props) => {
  const { id, name, desc, livelink, codelink, tech } = props.project;

  return (
    <CardContainer variants={ButtonVariants}>
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
          <StyledButton size={"sm"}>
            <ion-icon name="logo-github"></ion-icon>
            Code
          </StyledButton>
        </a>

        <a
          href={livelink}
          target="_blank"
          style={{ textDecoration: "none"}}
        >
          <StyledButton size={"sm"}>
            <ion-icon name="arrow-redo-outline"></ion-icon>
            Live
          </StyledButton>
        </a>
      </ButtonContainer>
    </CardContainer>
  );
};

export default ProjectCard;
