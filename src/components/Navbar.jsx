import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import '../styles/golden-theme.css'; // Ensure this file contains the updated styles below
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaTools,
  FaBriefcase,
  FaEnvelope,
  FaBars
} from 'react-icons/fa';

const Navbar = ({ toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="golden-nav">
      {/* Logo/Name */}
      <div className="nav-logo"> 😇 </div>

      {/* Hamburger Icon for Mobile */}
      <button className="hamburger-btn" onClick={handleMenuToggle}>
        <FaBars />
      </button>

      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? 'show-menu' : ''}`}>
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
      </div>

      {/* Dark Mode Toggle */}
      <DarkModeToggle toggleDarkMode={toggleDarkMode} />
    </nav>
  );
};

export default Navbar;
