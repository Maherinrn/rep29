import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing icons

// Styled Components for Team Section
const TeamSection = styled.section`
  padding: 5rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #111, #2c3e50); /* Dark gradient background */
  color: white;

  h2 {
    font-size: 3rem;
    margin-bottom: 4rem;
    color: #0ff;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .team {
    display: flex;
    justify-content: space-between; /* Distribute evenly */
    gap: 3rem;
    width: 100%;
    margin: 0 auto;
    flex-wrap: nowrap; /* Prevent wrapping */
    overflow: hidden; /* Prevent scrollbars */
    position: relative;

    .team-card {
      background: linear-gradient(145deg, #222, #111);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
      border: 2px solid #222;
      border-radius: 15px;
      padding: 3rem;
      text-align: center;
      width: 400px; /* Increase the card size */
      transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
      position: relative;
      overflow: visible; /* Ensure full visibility during animation */
      z-index: 1;
      /* Prevent margin pushing */
      margin-top: 20px;
      transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

      &:hover {
        transform: translateY(-10px); /* Slight adjustment for smooth animation */
        box-shadow: 0 10px 20px rgba(0, 255, 255, 0.4);
        border-color: #0ff;
      }

      &:hover::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(0, 255, 255, 0.1), transparent);
        z-index: 0;
        animation: rotateGlow 3s linear infinite;
      }

      @keyframes rotateGlow {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }

      .photo {
        width: 180px; /* Bigger image size */
        height: 180px;
        border-radius: 50%;
        margin: 0 auto 1rem;
        border: 3px solid #0ff;
        box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        position: relative;
        z-index: 1;
      }

      h3 {
        font-size: 1.8rem; /* Increased font size */
        margin-bottom: 1rem;
        color: #ff4081;
        position: relative;
        z-index: 1;
      }

      p {
        font-size: 1.2rem; /* Increased font size */
        color: #ccc;
        margin-bottom: 1rem;
        position: relative;
        z-index: 1;
      }

      .details {
        font-size: 1rem;
        color: #aaa;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        svg {
          color: #0ff;
        }
      }

      .social-icons {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;

        a {
          color: #0ff;
          font-size: 1.5rem;
          transition: color 0.3s;

          &:hover {
            color: #ff4081;
          }
        }
      }
    }
  }
`;

const Team = () => (
  <TeamSection id="team">
    <h2>Our Team</h2>
    <div className="team">
      {/* Team Member 1 */}
      <div className="team-card">
        <img
          src="https://via.placeholder.com/180"
          alt="Maherin"
          className="photo"
        />
        <h3>Maherin</h3>
        <p>Designer & Developer</p>
        <div className="details">
          <span>🎓 NIT Jalandhar (2027)</span>
        </div>
        <div className="social-icons">
          <a href="https://linkedin.com/in/maherin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/maherin" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      {/* Team Member 2 */}
      <div className="team-card">
        <img
          src="https://via.placeholder.com/180"
          alt="Rohan"
          className="photo"
        />
        <h3>Rohan</h3>
        <p>Fullstack Developer</p>
        <div className="details">
          <span>🎓 NIT Jalandhar (2027)</span>
        </div>
        <div className="social-icons">
          <a href="https://linkedin.com/in/rohan" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/rohan" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      {/* Team Member 3 */}
      <div className="team-card">
        <img
          src="https://via.placeholder.com/180"
          alt="Rishi"
          className="photo"
        />
        <h3>Rishi</h3>
        <p>Langflow Developer</p>
        <div className="details">
          <span>🎓 NIT Jalandhar (2028)</span>
        </div>
        <div className="social-icons">
          <a href="https://linkedin.com/in/rishi" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/rishi" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      {/* Team Member 4 */}
      <div className="team-card">
        <img
          src="https://via.placeholder.com/180"
          alt="Mangesh"
          className="photo"
        />
        <h3>Mangesh</h3>
        <p>ML Developer</p>
        <div className="details">
          <span>🎓 NIT Jalandhar (2027)</span>
        </div>
        <div className="social-icons">
          <a href="https://linkedin.com/in/mangesh" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/mangesh" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  </TeamSection>
);

export default Team;
