import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import avatar from '../assets/avatar.jpg';
import resumeFile from '../assets/MaheshNalageResume.pdf'; // Place your resume file in /src/assets/
import TypewriterText from './Typewriter';

function HeroSection() {
  return (
    <div className="hero-section">
      <img
        src={avatar}
        alt="Mahesh Harishchandra Nalage"
        className="profile-img"
      />
      <TypewriterText />
      <h2>Hello, I'm Mahesh Nalage</h2>
      <p>
        I specialize in transforming raw data into actionable insights using
        advanced SQL techniques, Python programming, and AWS Cloud services.
        My technical skill set includes robust database management, data
        analysis, data visualization, and predictive modeling. With a focus
        on developing innovative, data-driven solutions, I ensure that every
        project I work on is both scalable and efficient.
      </p>

      <div className="hero-buttons">
        {/* Download Resume Button */}
        <a
          href={resumeFile}
          download="MaheshNalageResume.pdf"
          className="resume-button"
        >
          Download Resume
        </a>

        {/* Contact Me Button (Links to /contact page) */}
        <Link to="/contact" className="contact-button">
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
