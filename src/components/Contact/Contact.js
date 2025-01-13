import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  background-color: #0f0f0f; /* Match Features background */
  color: white;
  padding: 4rem 3rem;
  font-family: Arial, sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  .footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    gap: 2rem;

    .footer-column {
      flex: 1;
      min-width: 250px;

      h4 {
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #0ff; /* Aqua color */
        text-transform: uppercase;
        letter-spacing: 1.5px;
      }

      p,
      a {
        font-size: 1rem;
        color: #ccc;
        margin-bottom: 0.7rem;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #fff;
        }
      }

      .footer-logo {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #ff4081; /* Pink highlight for branding */
        text-transform: uppercase;
      }

      .footer-description {
        font-size: 1.2rem;
        color: #ddd;
        margin-bottom: 2rem;
        line-height: 1.5;
      }

      .quick-links {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        a {
          color: #0ff;
          font-size: 1.1rem;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .newsletter {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    input {
      padding: 1rem;
      border: 1px solid #0ff;
      border-radius: 10px;
      background: transparent;
      color: white;
      font-size: 1rem;

      &:focus {
        outline: none;
        border-color: #fff;
        box-shadow: 0 0 5px #0ff;
      }
    }

    button {
      padding: 1rem 2rem;
      background: #0ff;
      color: #000;
      font-weight: bold;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: #0cc;
        transform: scale(1.05);
      }
    }
  }

  .footer-bottom {
    text-align: center;
    font-size: 1rem;
    color: #777;
    border-top: 1px solid #444;
    padding-top: 2rem;
    width: 100%;

    a {
      color: #0ff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 1024px) {
    .footer-content {
      flex-wrap: wrap;
      justify-content: center;
      gap: 3rem;

      .footer-column {
        text-align: center;
      }
    }

    .footer-description {
      text-align: center;
    }

    .newsletter input,
    .newsletter button {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      gap: 2rem;

      .footer-column {
        align-items: center;
        text-align: center;
      }
    }

    .footer-description {
      text-align: center;
      font-size: 1rem;
    }

    .newsletter {
      width: 100%;

      input {
        width: 100%;
      }

      button {
        width: 100%;
      }
    }

    .footer-bottom {
      font-size: 0.9rem;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem;

    .footer-content {
      gap: 1.5rem;
    }

    .footer-column h4 {
      font-size: 1.5rem;
    }

    .footer-description {
      font-size: 0.9rem;
    }

    .newsletter input,
    .newsletter button {
      font-size: 0.9rem;
      padding: 0.8rem;
    }

    .footer-bottom {
      font-size: 0.8rem;
    }
  }
`;

const Contact = () => (
  <FooterSection>
    <div className="footer-content">
      {/* Column 1: Logo and Description */}
      <div className="footer-column">
        <div className="footer-logo">Instametrics</div>
        <div className="footer-description">
          Empowering businesses with AI-driven social media analytics and
          insights.
        </div>
      </div>

      {/* Column 2: Quick Links */}
      <div className="footer-column">
        <h4>Quick Links</h4>
        <div className="quick-links">
          <a href="#features">Features</a>
          <a href="#team">Team</a>
          <a href="#top">Get Started</a>
        </div>
      </div>

      {/* Column 3: Newsletter */}
      <div className="footer-column">
        <h4>Stay Updated</h4>
        <div className="newsletter">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>

    {/* Footer Bottom Section */}
    <div className="footer-bottom">
      <p>© 2024 Instametrics. All rights reserved.</p>
      <p>
        <a href="#top">Privacy Policy</a> |{" "}
        <a href="#top">Terms of Service</a>
      </p>
    </div>
  </FooterSection>
);

export default Contact;
