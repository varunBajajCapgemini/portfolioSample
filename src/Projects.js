import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const ProjectCard = styled.div`
  width: 200px;
  margin: 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #ffd700;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #7a288a;
  margin-bottom: 20px;
`;

const ProjectLink = styled.a`
  font-size: 16px;
  color: #7a288a;
  text-decoration: none;
  cursor: pointer;
`;

const ProjectsComponent = () => {
  return (
    <ProjectsContainer>
      <ProjectCard>
        <ProjectTitle>Project 1</ProjectTitle>
        <ProjectDescription>
          This is a brief description of project 1. It's a web app that solves a specific problem.
        </ProjectDescription>
        <ProjectLink href="#">View Project</ProjectLink>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>Project 2</ProjectTitle>
        <ProjectDescription>
          This is a brief description of project 2. It's a mobile app that solves a specific problem.
        </ProjectDescription>
        <ProjectLink href="#">View Project</ProjectLink>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>Project 3</ProjectTitle>
        <ProjectDescription>
          This is a brief description of project 3. It's a web app that solves a specific problem.
        </ProjectDescription>
        <ProjectLink href="#">View Project</ProjectLink>
      </ProjectCard>
    </ProjectsContainer>
  );
};

export default ProjectsComponent;
