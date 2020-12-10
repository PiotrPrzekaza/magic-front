/* eslint-disable linebreak-style */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,200;0,300;0,400;1,100;1,500&family=Quicksand:wght@300;400;500&display=swap');
  html {
    padding-top:200px;
    font-size: 62.5%;
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  body {
    font-family:'Quicksand', 'Libre Franklin', sans-serif;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
  }
  
  h1, h2, h3, h4, h5, span {
    margin: 0;
  }
  
  button {
    padding: 0;
    cursor: pointer;
  }
  
  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
