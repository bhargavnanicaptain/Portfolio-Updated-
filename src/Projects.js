import React from "react";

function Projects() {
  return (
    <div>
      <style>
        {`
          * {
            font-family: 'Times New Roman', serif;
          }

          /* Background Animation */
          @keyframes backgroundZoom {
            0% {
              transform: scale(1);
              opacity: 0;
            }
            100% {
              transform: scale(1.1);
              opacity: 1;
            }
          }

          /* Background */
          .project-container {
            // background: url("https://files.oaiusercontent.com/file-1MfGSFJBjaRKB6AMyA4VfR?se=2025-02-27T10%3A15%3A09Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D5187483b-13b0-4ab2-b726-4408c40450cb.webp&sig=IqKkc5Qs0oxwnTWnQOYnkhbDNfDakILJljGKGopVIaQ%3D") 
            //             no-repeat center center fixed;
            background-color:#4169E1;
            background-size: cover;
            min-height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 50px 20px;
            color: white;
            animation: backgroundZoom 2s ease-in-out;
          }

          /* General Text Styles */
          .desc, .desc1, .desc2 {
            color: white;
            text-align: justify;
            max-width: 800px;
          }

          .head1 {
            color: #FFD700;
            text-align: center;
            margin-top: 20px;
          }

          .tech {
            font-weight: bold;
            margin-top: 10px;
          }

          .desc2 ul, .desc1 ul {
            text-align: left;
            padding-left: 20px;
          }

          /* Buttons Styling */
          .buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
          }

          .btn-sm {
            background-color: blue;
            border: none;
            border-radius: 25px;
            padding: 10px 20px;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
          }

          .btn-sm:hover {
            background-color: white;
            color: blue;
          }

          .btn-sm a {
            text-decoration: none;
            color: inherit;
          }

          .btn-secondary {
            background-color: gray;
          }

          .btn-secondary:hover {
            background-color: white;
            color: gray;
          }
            .main {
  font-size: 2.5rem; /* Adjust size for emphasis */
  font-weight: bold;
  color: #FFD700; /* Golden color for a premium feel */
  text-shadow: 2px 2px 10px rgba(255, 215, 0, 0.8); /* Glowing effect */
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 3px solid white; /* Underline effect */
  padding-bottom: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: inline-block;
}

        `}
      </style>

      <div className="project-container">
        <p className="desc">
          Welcome to my projects showcase! Here are my projects which I've worked on, highlighting my skills in React, Java, Spring Boot, and SQL.
        </p>
        <h1 className="main">React Based Projects: ⚛</h1>

        {/* Hospital Management System */}
        <h1 className="head1">1. Hospital Management System Using React</h1>
        <p className="desc1">
          A web-based platform to manage hospital operations, including patient records, appointments & staff details.
        </p>
        <h3 className="tech">Tech Stack:</h3>
        <p className="desc2">
          <ul>
            <li>React</li>
            <li>Java (Spring Boot)</li>
            <li>MySQL</li>
          </ul>
        </p>
        <h3 className="tech">Features:</h3>
        <p className="desc2">
          <ul>
            <li>Secure patient data storage</li>
            <li>Appointment scheduling system</li>
            <li>Role-based access for doctors & admin</li>
          </ul>
        </p>

        <div className="buttons">
          <button className="btn-sm">
            <a href="https://hosptal-management-system-lxi0gphmo.vercel.app/" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </button>
          <button className="btn-sm btn-secondary">
            <a href="https://github.com/bhargavnanicaptain/HOSPTAL-MANAGEMENT-SYSTEM" target="_blank" rel="noopener noreferrer">
              GitHub Source
            </a>
          </button>
        </div>

        {/* Personal Finance Tracker */}
        <h1 className="head1">2. Personal Finance Tracker Using React</h1>
        <p className="desc1">
          Developed a sleek Personal Finance Tracker with React, harnessing JavaScript (ES6+), HTML5, and CSS3 for intuitive interfaces. Integrated React Router for smooth navigation and incorporated Chart.js for dynamic data visualization. Utilized Git for version control, ensuring seamless collaboration.
        </p>
        <h3 className="tech">Tech Stack:</h3>
        <p className="desc2">
            <ul>
                <li><b>Frontend: </b> React, JavaScript (ES6+), HTML5, CSS3</li>
                <li><b>Routing: </b> React Router</li>
                <li><b>Version Control: </b> Git & GitHub</li>
            </ul>
        </p>
        <h3 className="tech">Features: </h3>
        <p className="desc2">
            <li>Expense & Income Tracking</li>
            <li>User-Friendly Interface</li>
            <li>Navigation System</li>
        </p>
        <div className="buttons">
          <button className="btn-sm">
            <a href="https://finance-tracker-using-react-mjyww7l35.vercel.app/" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </button>
          <button className="btn-sm btn-secondary">
            <a href="https://github.com/bhargavnanicaptain/FINANCE-TRACKER-USING-REACT" target="_blank" rel="noopener noreferrer">
              GitHub Source
            </a>
          </button>
        </div>
        <h1 className="main">Java & Database Projects ☕</h1>
        <h1 className="head1">3. Hospital Management System: </h1>
        <p className="desc1"> A robust Java application for hostel management, featuring patient and doctor profiles, along with appointment booking.</p>
        <h3 className="tech">Tech Stack: </h3>
        <p className="desc2">
            <ul>
                <li>Java</li>
                <li>JDBC</li>
                <li>MySQL</li>
                <li>IntelliJ Idea</li>
            </ul>
        </p>
        <h3 className="tech">Features:</h3>
        <p className="desc2">
            <ul>
                <li>Developed using IntelliJ IDEA</li>
                <li>Uses DBC for database connectivity.</li>
            </ul>
        </p>
            <h1 className="main">Web Development & UI Projects 🌐</h1>
            <h1 className="head1">5. To-Do List (HTML, CSS, JavaScript)</h1>
            <p className="desc1">A task management web app featuring a dynamic UI for adding, editing, and deleting tasks.</p>
            <h3 className="tech">Tech Stack:</h3>
            <p className="desc2">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </p>
            <h3 className="tech1">Features:</h3>
            <p className="desc2">
                <ul>
                    <li>Interactive UI</li>
                    <li>Responsive Design</li>
                </ul>
            </p>
            <div className="buttons">
          <button className="btn-sm">
            <a href="https://to-do-list-sand-psi.vercel.app/" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </button>
          <button className="btn-sm btn-secondary">
            <a href="https://github.com/bhargavnanicaptain/To-Do-List" target="_blank" rel="noopener noreferrer">
              GitHub Source
            </a>
          </button>
        </div>
        <h1 className="main">Clones & Replication Projects 🔄</h1>
        <h1 className="head1"> Paytm Clone (Web App - HTML, CSS, JavaScript)</h1>
        <p className="desc1">A web-based Paytm clone with functionalities like user authentication, mobile recharge, and bill payments.</p>
        <h3 className="tech">Tech Stack:</h3>
        <p className="desc2">
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
            </ul>
        </p>
        <div className="buttons">
          <button className="btn-sm">
            <a href="https://paytm-clone-lake.vercel.app/" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </button>
          <button className="btn-sm btn-secondary">
            <a href="https://github.com/bhargavnanicaptain/PYTM-CLONE" target="_blank" rel="noopener noreferrer">
              GitHub Source
            </a>
          </button>
        </div>
        <h1 className="head1">Codegnan Website (Using React)</h1>
        <p className="desc1">This project is a React-based replication of the Codegnan Institution website, designed to showcase courses, services, and institutional details in a structured and responsive manner. The website provides a seamless user experience with an interactive and modern UI, making it easy for students and visitors to explore educational offerings.</p>
        <h3 className="tech">Tech Stack: </h3>
        <p className="desc2">
            <ul>
                <li><b>Frontend Framework:</b> React.js (Component-based architecture for dynamic UI)</li>
                <li><b>Styling:</b> Bootstrap (Prebuilt responsive design components for styling)</li>
                <li><b>Routing:</b> React Router (If used for navigation between pages)</li>
                <li><b>State Management:</b> React Hooks (useState, useEffect for managing state)</li>
                <li><b>Deployment: </b>Vercel (Hosting the website for seamless accessibility)</li>
            </ul>
        </p>
        <h3 className="tech">Features: </h3>
        <p className="desc2">
        <ul>
    <li><b>Responsive Design</b> – Uses Bootstrap for a mobile-friendly and responsive layout.</li>
    <li><b>Component-Based Architecture</b> – Reusable UI components enhance maintainability.</li>
    <li><b>Smooth Navigation</b> – Multi-page structure with React Router for seamless transitions.</li>
    <li><b>Dynamic UI Updates</b> – Uses React’s state and hooks for interactive elements.</li>
    <li><b>Fast and Lightweight</b> – No backend or API calls, making the site efficient.</li>
    <li><b>Deployed on Vercel</b> – Ensures high availability and performance.</li>
</ul>
        </p>
        <div className="buttons">
          <button className="btn-sm">
            <a href="https://codegnan-website.vercel.app/" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </button>
          
        </div>
        <h1 className="main">📡 College-Time Tech Innovations (IoT & Automation)</h1>
        <h1 className="head1">SMART RAILWAY PLATFORM WITH PASSENGER SAFETY GATES TO PREVENT LEVEL CROSSING USING IOT:</h1>
        <p className="desc">Introducing our innovative Smart Railway Platform equipped with IoT technology and passenger safety gates to eliminate level crossing risks. Our system ensures enhanced safety and efficiency in railway operations.</p>
        <h3 className="tech">Features: </h3>
        <p className="desc2">
            <ul>
                <li>IoT-enabled sensors monitor train schedules and platform occupancy in real-time.</li>
                <li>Passenger safety gates automatically close during train arrival, preventing unauthorized access to the tracks.</li>
                <li>Integration with railway management systems for seamless operation and coordination.</li>
                <li>Real-time alerts to railway staff and passengers about train arrivals and departures.</li>
                <li>Improved safety measures to prevent accidents and ensure passenger well-being.</li>
            </ul>
        </p>
             <div className="buttons">
          <button className="btn-sm">
            <a href="https://docs.google.com/document/d/1FWmwquEwsQRNxrUP8OfBMVxk3v4HMgrdlwBlvFLMFHM/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
              Documentation
            </a>
          </button>
          </div>
          <h1 className="head1">GARBAGE MONITORING AND AUTO ALERTING SYSTEM TO MUNICIPALITY</h1>
          <p className="desc1">Introducing our cutting-edge Garbage Monitoring and Auto Alerting System utilizing IoT technology, designed to revolutionize municipal waste management. By deploying smart sensors across designated areas, our system continuously monitors garbage levels in bins. When levels reach a predefined threshold, automatic alerts are triggered, notifying municipality officials for timely intervention. This innovative solution not only streamlines waste collection processes but also promotes efficiency, cleanliness, and environmental sustainability in urban areas. Say goodbye to overflowing bins and hello to a smarter, cleaner city with our IoT-powered Garbage Monitoring System.</p>
          <h3 className="tech">Features: </h3>
          <p className="desc2">
            <ul>
            <li><b>Real-Time Garbage Level Monitoring</b> – Smart sensors track bin fill levels continuously.</li>
    <li><b>Automatic Alert System</b> – Triggers instant notifications to municipal authorities when bins are full.</li>
    <li><b>IoT Integration</b> – Uses cloud-based connectivity for seamless data transmission.</li>
    <li><b>GPS Tracking</b> – Enables authorities to locate full bins efficiently.</li>
    <li><b>Mobile & Web Dashboard</b> – Provides real-time updates and insights for waste management teams.</li>
    <li><b>Optimized Waste Collection Routes</b> – Reduces fuel consumption and improves collection efficiency.</li>
    <li><b>Eco-Friendly & Cost-Effective</b> – Minimizes manual monitoring, reducing operational costs.</li>
    <li><b>Prevents Overflow & Health Hazards</b> – Ensures timely disposal, maintaining hygiene in urban areas.</li>
            </ul>
          </p>
          <div className="buttons">
          <button className="btn-sm">
            <a href="https://docs.google.com/document/d/1DPlWZ14Er5H5rsmdBnB6xKpl1DWV6HwgTgoT-e7d6HM/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
              Documentation
            </a>
          </button>
          </div>
          <h1 className="head1">Obstacles Avoiding Robot</h1>
          <p className="desc1">Presenting our Obstacles Avoiding Robot, powered by Arduino technology, designed to navigate autonomously while avoiding obstacles in its path.</p>
          <h3 className="tech">Key Components: </h3>
          <p className="desc2">
            <ul>
                <li>Arduino microcontroller for real-time control and decision-making.</li>
                <li>Ultrasonic sensors for detecting obstacles and determining distances.</li>
                <li>Motor drivers to enable precise movement and maneuverability.</li>
                <li>Algorithm for obstacle avoidance and path planning.</li>
                <li>Compact and agile design for versatile use in various environments.</li>
            </ul>
          </p>
          <div className="buttons">
          <button className="btn-sm">
            <a href="https://docs.google.com/document/d/1WlNxqkPpe7-2hzhPGQqERXswoaxefrumz6unbqTDD_s/edit?tab=t.0">
              Documentation
            </a>
          </button>
          </div>

      </div>
    </div>
  );
}

export default Projects;
