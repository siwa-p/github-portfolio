import React from 'react';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
