import React from "react";
import ProfileImage from "./assets/profile.png";

function Home() {
  return (
    <div>
      <style>{`
        * {
          font-family: 'Times New Roman', serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .home-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: url("https://img.freepik.com/free-vector/bright-gradient-background-geometric-colorful_361591-4613.jpg?t=st=1740377100~exp=1740380700~hmac=43bb91a868993c49e16aebb6532873f2b7803e6110a98bebbeebd59da06e4609&w=2000") no-repeat center/cover;
          padding: 20px;
        }

        /* Slide-in animation */
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          text-align: center;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          max-width: 450px;
          width: 90%;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: slideIn 1s ease-out;
        }

        .name-container {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.5rem;
        }

        .linkedin {
          text-decoration: none;
          color: white;
          font-weight: bold;
        }

        .linkedin:hover {
          color: skyblue;
        }

        .profile-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-bottom: 15px;
        }

        .profile {
          border: 3px solid white;
          border-radius: 50%;
          width: 90px;
          height: 90px;
          transition: transform 0.3s ease-in-out;
        }

        .profile:hover {
          transform: scale(1.2);
        }

        .description {
          font-size: 1rem;
          margin-top: 10px;
          max-width: 350px;
          text-align: center;
        }

        .logo-container {
          margin-top: 10px;
        }

        .logo {
          height: 40px;
          width: auto;
          margin-left: 5px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .glass-card {
            padding: 20px;
            max-width: 350px;
          }

          .profile {
            width: 70px;
            height: 70px;
          }

          .name-container {
            font-size: 1.2rem;
          }

          .description {
            font-size: 0.9rem;
          }

          .logo {
            height: 30px;
          }
        }

        @media (max-width: 480px) {
          .glass-card {
            padding: 15px;
            max-width: 300px;
          }

          .profile {
            width: 60px;
            height: 60px;
          }

          .name-container {
            font-size: 1rem;
          }

          .description {
            font-size: 0.8rem;
          }

          .logo {
            height: 25px;
          }
        }
      `}</style>

      <div className="home-container">
        <div className="glass-card">
          {/* Profile Image */}
          <div className="profile-container">
            <img src={ProfileImage} alt="Your Profile" className="profile" />
          </div>

          {/* Name and LinkedIn */}
          <div className="name-container">
            <span>I am</span>
            <a href="https://www.linkedin.com/in/vtbhargav/" className="linkedin">V.T. BHARGAV</a>
          </div>

          {/* Description */}
          <p className="description">
            A passionate Full Stack Developer and RPA Enthusiast, currently working at Sonata Software.
          </p>

          {/* Sonata Logo */}
          <div className="logo-container">
            <a href="https://www.sonata-software.com/">
              <img src="https://seeklogo.com/images/S/sonata-software-logo-2D77F170A2-seeklogo.com.png" className="logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
