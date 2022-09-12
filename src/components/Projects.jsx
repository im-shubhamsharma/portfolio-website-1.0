import React from "react";
import { ProjectCardContainer } from "./styles/Projects.styled";
import { projects } from "../utils/constants";

import {
  StyledSection,
  StyledContainer,
  StyledTitle,
  SubTitle,
  StyledPara,
  StyledButton,
} from "./styles/Mixin";

import ProjectCard from "./ProjectCard";

const Projects = () => {

  const projectsElem = projects.map(project => {
      if(project.featured){
       return  <ProjectCard key={project.id} project={project}/>
      }  
    });

  return (
    <StyledSection>
      <StyledContainer>
        <div>
          <SubTitle>WORK</SubTitle>
          <StyledTitle>A Selection Of Stuff I've Built</StyledTitle>
        </div>

        <ProjectCardContainer>{projectsElem}</ProjectCardContainer>
      </StyledContainer>
    </StyledSection>
  );
};

export default Projects;
