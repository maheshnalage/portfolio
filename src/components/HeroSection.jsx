import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.jpg';
// If using public folder for PDF, just do: href="/MaheshNalageResume.pdf"
import TypewriterText from './Typewriter';

function HeroSection() {
  return (
    <div className="hero-section">
      <img
        src={avatar}
        alt="Mahesh Nalage"
        className="profile-img"
      />
      <TypewriterText />

      <h2>Hello, I'm Mahesh Nalage</h2>
      <p>
        I specialize in transforming raw data into actionable insights using
        advanced SQL techniques, Python programming, and AWS Cloud services.
        My technical skill set includes database management, data analysis,
        data visualization, and predictive modeling.
      </p>

      {/* Button container */}
      <div className="hero-buttons">
        {/* Download Resume button */}
        <a
          href="/MaheshNalageResume.pdf"
          download="MaheshNalageResume.pdf"
          className="hero-button"
        >
          Download Resume
        </a>

        {/* Contact Me button */}
        <Link to="/contact" className="hero-button">
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
