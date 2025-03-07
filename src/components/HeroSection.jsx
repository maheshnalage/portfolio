import React from 'react';
import avatar from '../assets/avatar.jpg';
import TypewriterText from './Typewriter';

function HeroSection() {
  return (
    <div className="hero-section">
      <img src={avatar} alt="Mahesh Harishchandra Nalage" className="profile-img" />
      <TypewriterText />
      <h2>Mahesh Nalage</h2>
      <p>
        I specialize in transforming raw data into actionable insights using advanced SQL techniques, Python programming, and AWS Cloud services. My technical skill set includes robust database management, data analysis, data visualization, and predictive modeling. With a focus on developing innovative, data-driven solutions, I ensure that every project I work on is both scalable and efficient.
      </p>
    </div>
  );
}

export default HeroSection;
