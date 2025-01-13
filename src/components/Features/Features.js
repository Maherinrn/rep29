import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faGlobe, faArrowUp, faUsers, faRobot, faBolt } from '@fortawesome/free-solid-svg-icons';

// Styled Components
const FeaturesSection = styled.section`
  padding: 5rem 0;
  text-align: center;
  background-color: #0f0f0f;
  color: white;

  h2 {
    font-size: 3.5rem;
    margin-bottom: 3rem;
    color: #0ff;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
    gap: 1.5rem; /* Small margin between cards */
    margin: 0 2rem; /* Margin around the entire features section */
    padding: 0;
  }

  .feature-card {
    background: linear-gradient(145deg, #222, #111);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    border: 2px solid #0ff;
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    transition: all 0.4s ease-in-out;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      transform: translateY(-15px);
      box-shadow: 0 15px 30px rgba(0, 255, 255, 0.4);
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

    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #ff4081;
      position: relative;
      z-index: 1;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    p {
      font-size: 1.1rem;
      color: #ccc;
      line-height: 1.5;
      position: relative;
      z-index: 1;
    }

    .icon {
      font-size: 3rem;
      color: #0ff;
      margin-bottom: 1.5rem;
      z-index: 1;
    }
  }

  /* Responsive design: Adjusting the layout for smaller screens */
  @media (max-width: 768px) {
    .features {
      grid-template-columns: repeat(1, 1fr); /* Stack cards in 1 column on smaller screens */
      margin: 0 1rem; /* Less margin on small screens */
    }

    .feature-card {
      width: 100%;
    }
  }
`;

const Features = () => (
  <FeaturesSection id="features">
    <h2>Key Features</h2>
    <div className="features">
      <div className="feature-card">
        <div className="icon">
          <FontAwesomeIcon icon={faChartLine} />
        </div>
        <h3>Real-time Analytics</h3>
        <p>Track your social media performance in real-time with comprehensive analytics and insights. Make data-driven decisions instantly.</p>
      </div>
      <div className="feature-card">
        <div className="icon">
          <FontAwesomeIcon icon={faGlobe} />
        </div>
        <h3>Global Reach Analysis</h3>
        <p>Understand your audience demographics and reach across different regions and platforms.</p>
      </div>
      <div className="feature-card">
        <div className="icon">
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
        <h3>Growth Tracking</h3>
        <p>Monitor your follower growth, engagement rates, and content performance over time.</p>
      </div>
      <div className="feature-card">
        <div className="icon">
          <FontAwesomeIcon icon={faUsers} />
        </div>
        <h3>Audience Insights</h3>
        <p>Get detailed insights about your audience preferences, behaviors, and engagement patterns.</p>
      </div>
      <div className="feature-card">
        <div className="icon">
          <FontAwesomeIcon icon={faRobot} />
        </div>
        <h3>GPT-powered Insights</h3>
        <p>Leverage AI to generate content ideas, optimize posting times, and improve engagement.</p>
      </div>
      <div className="feature-card">
        <div className="icon">
          <FontAwesomeIcon icon={faBolt} />
        </div>
        <h3>Smart Automation</h3>
        <p>Automate your social media workflow with intelligent scheduling and posting features.</p>
      </div>
    </div>
  </FeaturesSection>
);

export default Features;
