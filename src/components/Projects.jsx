import React, {useEffect, useRef} from "react";
import {
  ProjectCardContainer,
  StyledFilterContainer,
  StyledFilters,
} from "./styles/Projects.styled";
import { projects } from "../utils/constants";
import { motion, useInView, useAnimationControls } from "framer-motion";

import {
  StyledSection,
  StyledContainer,
  StyledTitle,
  SubTitle,
} from "./styles/Mixin";

import ProjectCard from "./ProjectCard";
//---------------------------------------------------------------------

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0, y:50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const ButtonVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

//-------------------------------------------------------------------------

const Projects = () => {
  
  const projectRef = useRef();
  const projectIsInView = useInView(projectRef);
  const controls = useAnimationControls();

  useEffect(() => {
    if (projectIsInView) {
      controls.start("visible");
    }
    if (!projectIsInView) {
      controls.start("hidden");
    }
  }, [projectIsInView]);

  const projectsElem = projects.map((project, i) => {
       return  <ProjectCard  key={project.id} project={project}/>

    });

  return (
    <StyledSection id="projects">
      <StyledContainer variants={containerVariants} animate={controls}>
        <motion.div variants={childrenVariants} ref={projectRef}>
          <SubTitle>WORK</SubTitle>
          <StyledTitle>A Selection Of Stuff I've Built</StyledTitle>
        </motion.div>

        <div>
          <StyledFilterContainer variants={childrenVariants}>
            <StyledFilters>Featured Projects</StyledFilters>
            <StyledFilters>React</StyledFilters>
            <StyledFilters>Material UI</StyledFilters>
            <StyledFilters>JavaScript</StyledFilters>
            <StyledFilters>HTML + CSS</StyledFilters>
          </StyledFilterContainer>
          <ProjectCardContainer>{projectsElem}</ProjectCardContainer>
        </div>
      </StyledContainer>
    </StyledSection>
  );
};

export default Projects;
