import React from 'react';
import styled from 'styled-components';
import { FaHome, FaUsers, FaEnvelope } from 'react-icons/fa'; // Import React Icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// Styling for the Navbar Container
const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #111, #222); /* Dark gradient background for a professional look */
  border-bottom: 3px solid #0ff; /* Cyan border for a pop of color */
  box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2); /* Deep shadow for depth */
  transition: background 0.3s ease;
`;

// Styling for the Logo
const Logo = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  color: #ff4081; /* Pink color for the logo */
  cursor: pointer;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: color 0.3s ease;
`;

// Styling for the Navbar Links
const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;

  li {
    font-size: 1.4rem;
    cursor: pointer;
    color: #fff; /* White color for links */
    display: flex;
    align-items: center;
    gap: 0.7rem;
    transition: color 0.3s ease, transform 0.3s ease;
    position: relative;

    &:hover {
      color: #0ff; /* Cyan color on hover */
      transform: translateY(-3px); /* Slight lift on hover */
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0%;
      height: 3px;
      background-color: #0ff; /* Cyan underline */
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%; /* Underline effect on hover */
    }
  }
`;

// Styling for the Start Analyzing Now Button
const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 1.4rem;
  background-color: #ff4081; /* Pink color for the button */
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ff1f5d; /* Darker pink on hover */
    transform: translateY(-3px); /* Slight lift effect */
  }
`;

// Navbar Component with Scroll Functionality
const Navbar = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to smoothly scroll to a section
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  // Navigate to Dashboard when button is clicked
  const handleButtonClick = () => {
    navigate('/dashboard'); // This will navigate to the Dashboard route
  };

  return (
    <NavbarContainer>
      <Logo>Instametrics</Logo>
      <NavLinks>
        <li onClick={() => scrollToSection('features')}>
          <FaHome /> Features
        </li>
        <li onClick={() => scrollToSection('team')}>
          <FaUsers /> Team
        </li>
        <li onClick={() => scrollToSection('team')}>
          <FaEnvelope /> Contact
        </li>
      </NavLinks>
      <StartButton onClick={handleButtonClick}>
        Start Analyzing Now
      </StartButton>
    </NavbarContainer>
  );
};

export default Navbar;
