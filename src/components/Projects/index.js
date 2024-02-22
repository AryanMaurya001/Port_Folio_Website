import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const toggle = "all"
  
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects in the field of Web Development. You can see them on my GitHub account.
        </Desc>

        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                key={project.id} // Add a unique key prop here (use a property like 'id' if available)
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                key={project.id} // Add a unique key prop here
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;