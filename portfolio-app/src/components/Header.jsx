import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { getAssetUrl } from '../utils/config';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">{personalInfo.name}</h1>
        <div className="contact-info">
          <p>{personalInfo.location}</p>
          <p>{personalInfo.phone}</p>
          <p><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
        </div>
        <div className="social-links">
          <a href={getAssetUrl(personalInfo.resumeUrl)} target="_blank" rel="noopener noreferrer">Resume</a>
          <span>|</span>
          <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span>|</span>
          <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          <span>|</span>
          <a href={personalInfo.googleScholarUrl} target="_blank" rel="noopener noreferrer">Google Scholar</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
