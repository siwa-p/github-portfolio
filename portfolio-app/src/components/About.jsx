import React from 'react';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        {personalInfo.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
