import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './LandingPage.css';

const LandingPage = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="landing-wrapper">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "#031338",
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff", distance: 150, opacity: 0.3, width: 1 },
            collisions: { enable: false },
            move: {
              directions: "none",
              enable: true,
              outModes: "bounce",
              random: false,
              speed: 1.2,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 50 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />

      <div className="landing-container">
        <div className="landing-header slide-down">
          <h1 className="landing-title">📌 Community Noticeboard</h1>
          <p className="landing-subtitle">
            The simplest way to stay informed and connected with your community.
          </p>
          <div className="landing-buttons fade-in">
            <Link to="/login">
              <button className="landing-btn primary">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="landing-btn secondary">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="landing-features fade-in-delayed">
          <h2>✨ Why Use Our Noticeboard?</h2>
          <ul>
            <li>📢 Post important announcements in seconds</li>
            <li>👀 View notices from anywhere, anytime</li>
            <li>🔒 Secure access with JWT authentication</li>
            <li>🧠 Minimal, fast and responsive design</li>
          </ul>
        </div>

        <footer className="landing-footer scale-in">
          <p>🚀 Built with ❤️ using React + Node.js</p>
          <p>© {new Date().getFullYear()} CommunityBoard Inc.</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
