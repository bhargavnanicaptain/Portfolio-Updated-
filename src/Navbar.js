import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <style>
            {
                `
                .navbar{
                        margin-left:40%;
                        }
                .nav-link:hover{
                        color:black;
                        
                        }
                `
            }
        </style>
    <section className="navbar">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link" to="/"><i class="fa-solid fa-house-user"></i>Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about"><i class="fa-solid fa-user"></i>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects"><i class="fa-solid fa-diagram-project"></i>Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/skills"><i class="fa-solid fa-code"></i>Skills</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/resume"><i class="fa-solid fa-file"></i>Resume</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact"><i class="fa-regular fa-address-card"></i>Contact</Link>
        </li>
      </ul>
    </section>
    </div>
  );
}

export default Navbar;
