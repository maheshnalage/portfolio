import React from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import '../styles/golden-theme.css';
// Importing icons from react-icons for visual enhancement
import { FaHome, FaUserAlt, FaProjectDiagram, FaTools, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="golden-nav">
      {/* Use NavLink with a function to add 'active' class when route matches */}
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        <FaHome /> Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
        <FaUserAlt /> About
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
        <FaProjectDiagram /> Projects
      </NavLink>
      <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>
        <FaTools /> Skills
      </NavLink>
      <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>
        <FaBriefcase /> Experience
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
        <FaEnvelope /> Contact
      </NavLink>
      {/* Dark mode toggle button */}
      <DarkModeToggle toggleDarkMode={toggleDarkMode} />
    </nav>
  );
};

export default Navbar;
