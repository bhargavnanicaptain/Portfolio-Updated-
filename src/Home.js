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
          background: url("https://png.pngtree.com/thumb_back/fh260/background/20210324/pngtree-abstract-playful-portfolio-pink-memphis-image_593415.jpg") 
            no-repeat center/cover;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        /* Animated Dotted Overlay */
        .dots-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 1%, transparent 10%);
          background-size: 80px 80px;
          mix-blend-mode: overlay;
          animation: moveDots 8s linear infinite;
          opacity: 0.6; /* Adjust transparency */
        }

        /* Keyframes for Dots Animation */
        @keyframes moveDots {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(20px) translateY(20px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }

        /* Glassmorphic Card */
        .glass-card {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          text-align: center;
          color: black;
          border: 1px solid rgba(255, 255, 255, 0.3);
          max-width: 450px;
          width: 90%;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: slideIn 1s ease-out;
          z-index: 2;
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

        .name-container {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.5rem;
        }

        .linkedin {
          text-decoration: none;
          color: black;
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
        {/* Dots animation layer */}
        <div className="dots-overlay"></div>

        {/* Glassmorphic Card */}
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
