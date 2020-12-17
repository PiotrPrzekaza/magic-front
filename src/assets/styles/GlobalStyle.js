import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;300;400;600;700&display=swap');
  
  html {
    /* padding-top: 180px; */
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

  ${({ home }) =>
    home &&
    css`
      padding-top: 0;
    `}
`;
