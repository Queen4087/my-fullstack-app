import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.slate};
    font-family: ${({ theme }) => theme.fonts.primary};
    line-height: 1.3;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.lightestNavy};
    color: ${({ theme }) => theme.colors.lightestSlate};
  }

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.navy};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.darkSlate};
    border: 3px solid ${({ theme }) => theme.colors.navy};
    border-radius: 10px;
  }
`;

export default GlobalStyles;
