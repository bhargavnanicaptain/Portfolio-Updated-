import React from "react";
import ProfileImage from "./assets/profile.jpg";

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
          background-image: url('https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          background-size: cover;
          background-position: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

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
          opacity: 0.6;
        }

        @keyframes moveDots {
          0% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
          100% { transform: translate(0, 0); }
        }

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

        .profile-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-bottom: 15px;
        }

        .profile {
          border: 3px solid white;
          border-radius: 16px;
          width: 220px;
          height: 280px;
          object-fit: cover;
          transition: transform 0.4s ease, box-shadow 0.4s ease, filter 0.4s ease;
        }

        .profile:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          filter: brightness(1.1);
        }

        .name-container {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.5rem;
          margin-top: 10px;
        }

        .linkedin {
          text-decoration: none;
          color: black;
          font-weight: bold;
        }

        .linkedin:hover {
          color: skyblue;
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

        .attribution {
          position: absolute;
          bottom: 10px;
          right: 10px;
          font-size: 0.7rem;
          color: #333;
          z-index: 1;
        }

        .attribution a {
          color: #333;
          text-decoration: none;
        }

        .attribution a:hover {
          color: skyblue;
        }

        /* Larger screens */
        @media (min-width: 1200px) {
          .glass-card {
            max-width: 500px;
            padding: 40px;
          }

          .profile {
            width: 240px;
            height: 300px;
          }

          .name-container {
            font-size: 2rem;
          }

          .description {
            font-size: 1.1rem;
          }

          .logo {
            height: 50px;
          }
        }

        /* Medium desktops and tablets */
        @media (max-width: 992px) {
          .glass-card {
            max-width: 400px;
            padding: 30px;
          }

          .profile {
            width: 200px;
            height: 260px;
          }

          .name-container {
            font-size: 1.4rem;
          }

          .description {
            font-size: 0.95rem;
          }

          .logo {
            height: 35px;
          }
        }

        /* Tablets and large phones */
        @media (max-width: 768px) {
          .glass-card {
            padding: 20px;
            max-width: 350px;
          }

          .profile {
            width: 150px;
            height: 200px;
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

        /* Small phones */
        @media (max-width: 480px) {
          .glass-card {
            padding: 15px;
            max-width: 300px;
          }

          .profile {
            width: 110px;
            height: 140px;
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
        <div className="dots-overlay"></div>

        <div className="glass-card">
          <div className="profile-container">
            <img src={ProfileImage} alt="Your Profile" className="profile" />
          </div>

          <div className="name-container">
            <span>I am</span>
            <a href="https://www.linkedin.com/in/vtbhargav/" className="linkedin">V.T. BHARGAV</a>
          </div>

          <p className="description">
            A passionate Full Stack Developer and RPA Enthusiast, currently working at Sonata Software.
          </p>

          <div className="logo-container">
            <a href="https://www.sonata-software.com/">
              <img src="https://seeklogo.com/images/S/sonata-software-logo-2D77F170A2-seeklogo.com.png" className="logo" alt="Sonata Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
