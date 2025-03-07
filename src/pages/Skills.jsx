import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaDatabase, 
  FaPython, 
  FaChartBar 
} from 'react-icons/fa';
import '../styles/golden-theme.css';

const skillsData = [
  {
    skill: "HTML",
    icon: <FaHtml5 color="#E34F26" />,
    projects: ["E-Commerce App", "Budget Tracker", "Clone Innomatics Website"]
  },
  {
    skill: "CSS",
    icon: <FaCss3Alt color="#1572B6" />,
    projects: ["E-Commerce App", "Budget Tracker", "Clone Innomatics Website"]
  },
  {
    skill: "JavaScript",
    icon: <FaJsSquare color="#F7DF1E" />,
    projects: ["E-Commerce App", "Budget Tracker", "Clone Innomatics Website"]
  },
  {
    skill: "React",
    icon: <FaReact color="#61DAFB" />,
    projects: ["Portfolio Website", "To-Do List"]
  },
  {
    skill: "SQL",
    icon: <FaDatabase color="#336791" />,
    projects: ["Gym Management System"]
  },
  {
    skill: "Python",
    icon: <FaPython color="#3776AB" />,
    projects: ["AI Assistive Tool for Visually Impaired", "Electric Vehicle Market Analysis using EDA"]
  },
  {
    skill: "Data Analysis",
    icon: <FaChartBar color="#ff9900" />,
    projects: ["Electric Vehicle Market Analysis using EDA"]
  }
];

function Skills() {
  return (
    <div className="skills container">
      <h1>Skills</h1>
      <div className="skills-cards">
        {skillsData.map((item, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{item.icon}</div>
            <h3>{item.skill}</h3>
            <p>Projects using {item.skill}:</p>
            <ul>
              {item.projects.map((proj, idx) => (
                <li key={idx}>{proj}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
