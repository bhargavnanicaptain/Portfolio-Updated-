import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Move styles to a separate file (optional, cleaner)

function Navbar() {
  return (
    <nav className="navbar-container">
      <ul className="navbar">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fa-solid fa-house-user"></i> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            <i className="fa-solid fa-user"></i> About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">
            <i className="fa-solid fa-diagram-project"></i> Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/skills">
            <i className="fa-solid fa-code"></i> Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/resume">
            <i className="fa-solid fa-file"></i> Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            <i className="fa-regular fa-address-card"></i> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
