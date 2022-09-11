import React from "react";
import {
  ProjectContainer,
  SubTitle,
  Title,
  SubContainer1,
  ProjectCardContainer,
} from "./styles/Projects.styled";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <ProjectContainer>
      <SubContainer1>
        <SubTitle>WORK</SubTitle>
        <Title>A Selection Of Stuff I've Built</Title>
      </SubContainer1>
     <ProjectCardContainer>
           <ProjectCard />
           <ProjectCard />
           <ProjectCard />
           <ProjectCard />
           <ProjectCard />
           <ProjectCard />
     </ProjectCardContainer>
    </ProjectContainer>
  );
};

export default Projects;
