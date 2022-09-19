import React, { useRef, useState, useEffect } from "react";
import { Container, Title, SubTitle, Para, Button } from "../styles/Mixin";
import {
  StyledFilterContainer,
  StyledFilters,
  ProjectCardContainer,
} from "../styles/Projects.style";
import { projectsData, projectsFilters } from "../utils/constants";
import ProjectCard from "../components/ProjectCard";

import { motion } from "framer-motion";
import { FadeIn } from "../utils/animation";
//----------------------------------------

const Projects = () => {
  const [projects, setProjects] = useState(
    projectsData.filter((project) => project.featured)
  );

  const [filters, setFilters] = useState(projectsFilters);

  function filterProjects(e, key) {
    console.log(key);

    let str = e.target.attributes.value.value;

    if (str !== "featured") {
      setProjects(projectsData.filter((project) => project.type.includes(str)));
    } else {
      setProjects(projectsData.filter((project) => project.featured));
    }

    setFilters((prevData) =>
      prevData.map((filter) =>
        filter.value === str
          ? { ...filter, focus: true }
          : { ...filter, focus: false }
      )
    );
  }

  //-----------------------------------

  //-----------------------------------

  const projectsElem = projects.map((project, i) => (
    <ProjectCard key={project.id} project={project} />
  ));

  const projectsFiltersElem = filters.map((filter) => (
    <StyledFilters
      key={filter.id}
      id={filter.id}
      focus={filter.focus}
      value={filter.value}
      onClick={(e) => {
        filterProjects(e);
      }}
    >
      {filter.name}
    </StyledFilters>
  ));

  //-----------------------------------

  return (
    <Container
      id="projects"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 1 }}
    >
      <motion.div style={{ marginTop: "0rem" }} variants={FadeIn}>
        <SubTitle>WORK</SubTitle>
        <Title>A Selection Of Stuff I've Built</Title>
      </motion.div>

      <motion.div variants={FadeIn}>
        <StyledFilterContainer variants={FadeIn}>
          {projectsFiltersElem}
        </StyledFilterContainer>

        <ProjectCardContainer variants={FadeIn}>
          {projectsElem}
        </ProjectCardContainer>
      </motion.div>
    </Container>
  );
};

export default Projects;
