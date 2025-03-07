import React from 'react';
import '../styles/golden-theme.css';

// Import images statically
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';
import project7 from '../assets/project7.png';
import project8 from '../assets/project8.png';


const projects = [
  {
    name: "E-Commerce App",
    github: "https://github.com/maheshnalage/innomaticsinternship/tree/main/Assgnment4",
    live: "http://innomaticsinternship-wo7j.vercel.app",
    description: "An interactive e-commerce application with full cart functionality.",
    tech: "React, Node.js, Express",
    img: project1
  },
  {
    name: "Budget Tracker",
    github: "https://github.com/maheshnalage/innomaticsinternship/tree/main/assignment%201",
    live: "https://www.linkedin.com/posts/mahesh-nalage715_html-css-javascript-activity-7292506453033017344-hhOF",
    description: "A casino-themed budget tracker with interactive sound effects.",
    tech: "HTML, CSS, JavaScript",
    img: project2
  },
  {
    name: "Clone Innomatics Website",
    github: "https://github.com/maheshnalage/innomaticsinternship/tree/main/Project1",
    live: "https://mahahahahahaha.vercel.app/",
    description: "A responsive project replicating the Innomatics website's design and core functionalities.",
    tech: "HTML, CSS, JavaScript",
    img: project3
  },
  {
    name: "Memory Match Game",
    github: "https://github.com/maheshnalage/innomaticsinternship/tree/main/Project2",
    live: "https://innomaticsinternship-zp26.vercel.app/",
    description: "An engaging game where players flip cards to match pairs, challenging their memory.",
    tech: "JavaScript, HTML, CSS",
    img: project4
  },
  {
    name: "To-Do List",
    github: "https://github.com/maheshnalage/innomatcstask",
    live: "https://innomatcstask-c9yh.vercel.app/",
    description: "An application that helps users manage their daily tasks effectively.",
    tech: "React, CSS, Framer Motion",
    img: project5
  },
  {
    name: "AI Assistive Tool for Visually Impaired",
    github: "https://github.com/maheshnalage/AI-Assistive-Tool-for-Visually-Impaired-.git",
    live: "https://www.linkedin.com/posts/mahesh-nalage715_ai-assistivetech-visuallyimpaired-activity-7267512306186502146-2DY0",
    description: "An assistive tool using AI to aid the visually impaired, with detailed posts on LinkedIn.",
    tech: "Python, TensorFlow, OpenCV , Generative AI",
    img: project6
  },
  {
    name: " AI Code Reviewer",
    github: "https://github.com/maheshnalage/AI-Code-Reviewer.git",
    live: "https://www.linkedin.com/posts/mahesh-nalage715_ai-python-streamlit-activity-7263894407005753344-_DR5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADl4ZiIBFU3Qd7ekb9qfpERRbojAGYQz6LI",
    description: "An intelligent system that automatically inspects code, identifies issues, and provides insightful feedback to improve quality and maintainability.",
    tech: "Python, Streamlit , Generative AI",
    img: project7
  },
  
  {
    name: " Electric Vehicle Market Analysis using EDA!",
    github: "https://github.com/maheshnalage/Data_Analysis_on_Electric_Vehicle.git",
    live: "https://www.linkedin.com/posts/mahesh-nalage715_internship-datascience-innomaticsresearchlabs-activity-7250817775454015488-4emM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADl4ZiIBFU3Qd7ekb9qfpERRbojAGYQz6LI",
    description: "A project focused on exploring and visualizing trends, consumer behaviors, and market dynamics in the electric vehicle industry to uncover key insights for strategic decision-making.",
    tech: "Python, Pandas, Numpy , Matplotlib, Plotly",
    img: project8
  }


];

function Projects() {
  return (
    <div className="projects container">
      <h1>My Projects</h1>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* Project image displayed at the top */}
            <img src={project.img} alt={project.name} className="project-img" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="tech-stack"><strong>Tech Stack:</strong> {project.tech}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <span role="img" aria-label="GitHub">📄</span> GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <span role="img" aria-label={project.live.includes("linkedin.com") ? "LinkedIn Post" : "Live Demo"}>
                  {project.live.includes("linkedin.com") ? "💼" : "🔗"}
                </span>{" "}
                {project.live.includes("linkedin.com") ? "LinkedIn" : "Live Demo"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
