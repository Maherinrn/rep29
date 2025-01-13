import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #000;
    color: #0ff;
    overflow-x: hidden;
  }
  h1, h2, h3 {
    /* Removed animation */
    color: #0ff;  /* Static color, no glow */
  }
  a {
    text-decoration: none;
    color: #0ff;
    &:hover {
      color: #f0f;
    }
  }
`;

export default GlobalStyles;
