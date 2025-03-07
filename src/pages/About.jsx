import React, { useState } from 'react';
import '../styles/golden-theme.css';

function Card({ title, icon, description, extraDetails }) {
  const [expanded, setExpanded] = useState(false);
  const toggleDetails = () => setExpanded(!expanded);

  return (
    <div className="card" onClick={toggleDetails}>
      <div className="card-header">
        <span role="img" aria-label={title} className="card-icon">{icon}</span>
        <h3 className="card-title">{title}</h3>
      </div>
      <p className="card-description">{description}</p>
      {expanded && (
        <div className="extra-details">
          {extraDetails}
        </div>
      )}
    </div>
  );
}

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        I am <strong>Mahesh Harishchandra Nalage</strong>, a passionate technology enthusiast based in Pune.
        I specialize in transforming complex data challenges into innovative solutions that create a real impact.
      </p>
      <p>
        My journey began with a Master’s in Computer Application from Sinhgad Institute of Management and Computer Application, where I earned a CGPA of 7.15.
        This solid foundation paved the way for my expertise in SQL Database Management, Data Science, and Cloud Computing.
      </p>
      <p>
        I refined my skills through internships—working as an SQL Intern at Kognivera IT Solutions and diving into real-world data with Exploratory Data Analysis at Innomatics Research Labs.
      </p>
      <p>
        As an AWS Certified Cloud Practitioner, I continuously expand my technical toolkit. My projects include developing an AI Assistive Tool for the Visually Impaired, a Gym Management System, and conducting an Electric Vehicle Market Analysis using EDA.
      </p>
      <p>
        Outside of technology, I enjoy exploring nature, experimenting with creative projects, and immersing myself in sci-fi movies and gaming—activities that fuel my innovative approach.
      </p>

      <div className="cards-container">
        <Card
          title="Education"
          icon="🎓"
          description="Master's in Computer Application"
          extraDetails={<p>Sinhgad Institute | CGPA: 7.15</p>}
        />
        <Card
          title="Experience"
          icon="💼"
          description="Internships & Projects"
          extraDetails={
            <div>
              <p>Kognivera IT Solutions (SQL Intern)</p>
              <p>Innomatics Research Labs (Data Science Intern)</p>
            </div>
          }
        />
        <Card
          title="Certifications"
          icon="📜"
          description="AWS Certifications & More"
          extraDetails={
            <ul className="certification-list">
              <li>AWS Cloud Practitioner</li>
              {/* Add more certifications here if needed */}
            </ul>
          }
        />
        <Card
          title="Location"
          icon="📍"
          description="Pune, India"
          extraDetails={<p>Actively seeking IT opportunities</p>}
        />
      </div>
    </div>
  );
}

export default About;
