import React from "react";
import ProfileImage from "./assets/profile.jpg"; // Add your profile image

function About() {
  return (
    <div className="about-container">
      <style>
        {`
          /* Background */
          .about-container {
            background: url("https://img.freepik.com/free-vector/simple-gradient-background-vector-winter-blue_53876-105767.jpg?t=st=1744023151~exp=1744026751~hmac=586aaafad948cdec543318e824328801634e3bda50234d95cb776b5d4cfc9642&w=1380") 
                        no-repeat center center fixed;
            background-size: cover;
            min-height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 50px 20px;
            color: black;
            animation: fadeIn 1.5s ease-in-out;
          }

          /* Glassmorphism Effect */
          .glass-box {
    max-width: 600px;
    background: rgba(135, 206, 250, 0.3); /* Sky Blue with transparency */
    backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 10px rgba(135, 206, 250, 0.3);
    margin-bottom: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: fadeIn 1.5s ease-in-out;
}

.glass-box:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(135, 206, 250, 0.4);
}


.profile-img {
  width: 300px;
  height: auto;
  object-fit: cover;
  border: 4px solid black;
  margin-bottom: 20px;
  animation: fadeIn 1.5s ease-in-out;
  border-radius: 12px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.profile-img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}



          /* Section Title */
          .section-title {
            font-size: 1.8rem;
            font-weight: bold;
            margin-bottom: 10px;
          }

          /* List Styling */
          .info-list {
            list-style: none;
            padding: 0;
          }

          .info-list li {
            margin: 5px 0;
            font-size: 1.1rem;
            font-weight: 500;
          }

          .certificates {
            text-decoration: none;
            color: black;
            transition: color 0.3s ease;
          }

          .certificates:hover {
            color: blue;
          }

          /* Fade-in Animation */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* Profile Image */}
      <img src={ProfileImage} alt="Bhargav" className="profile-img" />

      {/* About Me Section */}
      <div className="glass-box">
        <h1 className="section-title">About Me</h1>
        <p>
          Hi, I'm <b>V.T. Bhargav</b>. A passionate Full Stack Developer and RPA Enthusiast, currently working at Sonata Software.
        </p>
        <p><b>Skills:</b> Java | React | Spring Boot | RPA (Blue Prism) | SQL</p>
      </div>

      {/* Education Section */}
      <div className="glass-box">
        <h1 className="section-title">Education</h1>
        <ul className="info-list">
          <li><b>B.Tech in Electronics & Communication Engineering</b></li>
          <li>SIET College, Hyderabad</li>
          <li>Graduated: 2023</li>
        </ul>
      </div>

      {/* Certifications Section */}
      <div className="glass-box">
        <h1 className="section-title">Certifications</h1>
        <ul className="info-list">
          <li>Java Full Stack Development - Codegnan Destination</li>
          <li>CSS - <a href="https://www.hackerrank.com/certificates/a7f22e0723b0" className="certificates">HackerRank</a></li>
          <li>SQL - <a href="https://www.hackerrank.com/certificates/33d59ca3dbea" className="certificates">HackerRank</a></li>
          <li>Responsive Web Design - <a href="https://freecodecamp.org/certification/fccda73044b-f7ea-45e9-ad84-c27de4fd4dfe/responsive-web-design" className="certificates">FreeCodeCamp</a></li>
          <li>JavaScript - <a href="https://simpli-web.app.link/e/YDuqlXY5eRb" className="certificates">Simplilearn</a></li>
          <li>Fundamentals of Java - Tap Academy</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
