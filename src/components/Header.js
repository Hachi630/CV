import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1 className="name">XingYuan Zhou</h1>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">Mobile:</span>
            <span className="contact-value">+64 0273305492</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <span className="contact-value">xzho158@aucklanduni.ac.nz</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/xingyuan-zhou-hachi630/" 
               className="contact-link" 
               target="_blank" 
               rel="noopener noreferrer">
              https://www.linkedin.com/in/xingyuan-zhou-hachi630/
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">GitHub:</span>
            <a href="https://github.com/Hachi630" 
               className="contact-link" 
               target="_blank" 
               rel="noopener noreferrer">
              github.com/Hachi630
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
