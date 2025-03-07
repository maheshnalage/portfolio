import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/golden-theme.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mahesh Nalage. All rights reserved.</p>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/mahesh-nalage715"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/maheshnalage?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        <a href="mailto:maheshnalage47@gmail.com">
          <FaEnvelope /> Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
