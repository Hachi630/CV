import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
      <div className="section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-item">
          <div className="experience-header">
            <div className="job-info">
              <h3 className="job-title">Front-End Development Intern</h3>
              <div className="company">NINGBO HAITIAN HOLDING GROUP CO., LTD</div>
            </div>
            <div className="job-meta">
              <span className="date">Mar 2024 - Jun 2024</span>
              <span className="location">Ningbo, China</span>
            </div>
          </div>
          <div className="job-responsibilities">
            <ul>
              <li>Assisted in developing and maintaining web interfaces for internal management systems and client-facing platforms.</li>
              <li>Utilized modern front-end technologies such as HTML, CSS, JavaScript, and React to build responsive and user-friendly components.</li>
              <li>Gained hands-on experience with Git version control, debugging, and cross-browser compatibility testing.</li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Experience;
