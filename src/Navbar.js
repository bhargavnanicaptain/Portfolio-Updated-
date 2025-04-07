import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light p-3 shadow-sm rounded">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">V.T. BHARGAV</Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/"><i className="fa-solid fa-house-user"></i> Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"><i className="fa-solid fa-user"></i> About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects"><i className="fa-solid fa-diagram-project"></i> Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills"><i className="fa-solid fa-code"></i> Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume"><i className="fa-solid fa-file"></i> Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact"><i className="fa-regular fa-address-card"></i> Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        .nav-link:hover {
          color: #000 !important;
        }

        @media (max-width: 768px) {
          .navbar-nav {
            background-color: #f8f9fa;
            padding: 1rem;
            border-radius: 10px;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
