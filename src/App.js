// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features/Features';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Dashboard from './components/Dashboard';  // Import Dashboard component

// Registering necessary components for chart rendering
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Styled components for layout and visuals
const HomeSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #111, #2c3e50); /* Dark background with gradient */
  color: white;
  padding: 4rem;
  flex-direction: row;
  overflow: hidden;
  border-bottom: 2px solid #444;
`;

const HomeText = styled.div`
  max-width: 50%;
  h1 {
    font-size: 4rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #0ff; /* Neon effect */
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #ddd;
    line-height: 1.7;
  }
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  max-width: 50%;
`;

const GetStartedButton = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  color: #111;
  background-color: #0ff;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ff4081;
    transform: scale(1.05);
  }
`;

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #0ff;
  color: #fff;
  border: none;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
  font-size: 2rem;
  z-index: 999; /* Ensure it's on top of other elements */

  &:hover {
    background-color: #ff4081;
  }
`;

const ChartTitle = styled.h3`
  font-size: 1.6rem;
  color: #ddd;
  text-align: center;
  margin-bottom: 1rem;
`;

// Bar Graph Data (Social Media Engagement Over Time)
const barData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Social Media Engagement',
      data: [65, 59, 80, 81, 56],
      backgroundColor: '#2980b9',
      borderColor: '#2980b9',
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false, // Ensure charts maintain aspect ratio
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      enabled: true,
    },
  },
};

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <GlobalStyles />
      {/* Only render Navbar on Home Page */}
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={
          <>
            <Navbar />
            <HomeSection>
              <HomeText>
                <h1>Unlock Data-Driven Insights with AI Analytics</h1>
                <p>Take your social media strategy to the next level with powerful data analytics that help you understand trends, measure engagement, and drive growth.</p>
                {/* Navigate to dashboard */}
                <Link to="/dashboard">
                  <GetStartedButton>Start Analyzing Now</GetStartedButton>
                </Link>
              </HomeText>
              <ChartContainer>
                <ChartTitle>Social Media Engagement Over Time</ChartTitle>
                <div style={{ position: 'relative', height: '250px', width: '100%' }}>
                  <Bar data={barData} options={chartOptions} />
                </div>
              </ChartContainer>
            </HomeSection>
            <Features />
            <Team />
            <Contact />
            {showScroll && <ScrollButton onClick={scrollToTop}>↑</ScrollButton>}
          </>
        } />

        {/* Dashboard Page Route (No Navbar) */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
