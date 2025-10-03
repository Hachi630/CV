import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
      <div className="section">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          <div className="project-item">
            <div className="project-header">
              <h3 className="project-title">Personal Project: Pokédex Web App</h3>
              <span className="project-date">Dec 2024 - Jan 2025</span>
            </div>
            <div className="project-description">
              <ul>
                <li>Developed a responsive Pokédex web app using React and PokéAPI, allowing users to search, filter, and view detailed Pokémon stats and images.</li>
                <li>Implemented dynamic routing with React Router and loading states for smooth UX.</li>
                <li>Styled the UI with CSS Modules based on a custom Figma design inspired by classic Pokémon games.</li>
                <li>Hosted the app on Vercel with live API integration for real-time data.</li>
              </ul>
            </div>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h3 className="project-title">Team Project - EventHub Web App</h3>
              <span className="project-date">Jul 2024 - Sep 2024</span>
            </div>
            <div className="project-description">
              <ul>
                <li>Worked in a team of 4 to build a full-stack event management app using React, Node.js, Express, and MongoDB.</li>
                <li>Helped develop front-end pages with React and React Router, including event listings and registration forms.</li>
                <li>Built and connected APIs for event creation and user login.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Projects;
