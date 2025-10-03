import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-End',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Vite', 'Figma']
    },
    {
      title: 'Back-End',
      skills: ['Node.js', 'Express', 'Spring Boot', 'MongoDB', 'MySQL', 'Redis', 'Docker', 'Linux', 'Git', 'AWS']
    },
    {
      title: 'Other Tools',
      skills: ['Signavio', 'SPSS']
    }
  ];

  return (
    <div className="section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
