import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link github-link"
          >
            <img
              src="https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub"
              alt="View on GitHub"
            />
          </a>
          {project.additionalLinks && project.additionalLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link additional-link"
            >
              {link.label === "Exploratory Data Analysis" && (
                <img
                  src="https://img.shields.io/badge/View-EDA_Repository-green?logo=Read-the-Docs"
                  alt={link.label}
                />
              )}
              {link.label === "API for User Access" && (
                <img
                  src="https://img.shields.io/badge/View-API_Repository-orange?logo=Python"
                  alt={link.label}
                />
              )}
            </a>
          ))}
          {project.documentUrl && (
            <a
              href={project.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link doc-link"
            >
              <img
                src="https://img.shields.io/badge/View-Project_Documentation-green?logo=Read-the-Docs"
                alt="View Documentation"
              />
            </a>
          )}
        </div>
      </div>

      <div className="project-skills">
        <strong>Key Skills:</strong> {project.skills}
      </div>

      <div className="project-description">
        {project.description.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {project.keyAchievements && (
        <div className="key-achievements">
          <strong>Key Technical Achievements:</strong>
          <ul>
            {project.keyAchievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}

      {project.conclusionText && (
        <p className="conclusion-text">{project.conclusionText}</p>
      )}

      {project.runCommand && (
        <div className="run-command">
          <p>To run the app, use the following R command:</p>
          <pre><code>{project.runCommand}</code></pre>
        </div>
      )}

      {project.image && (
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
