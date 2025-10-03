import React from 'react';
import './Education.css';

const Education = () => {
  return (
      <div className="section">
        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <div className="education-header">
            <h3 className="degree">Master of Information Technology</h3>
            <span className="date">Feb 2025 - Feb 2026</span>
          </div>
          <div className="university">University of Auckland</div>
          <div className="relevant-courses">
            <h4>Relevant Coursework:</h4>
            <ul>
              <li>Advanced Database Systems</li>
              <li>Cloud Computing Architecture</li>
              <li>IT Consultancy</li>
              <li>Data Mining and Big Data</li>
              <li>Software Tools and Techniques</li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Education;
