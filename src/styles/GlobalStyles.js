import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    background-color: #f8fafc;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Merriweather', serif;
    color: #323842;
  }

  p {
      font-size: 1rem;
      color: #6b7280;
      line-height: 1.65;
    }

  a {
    text-decoration: none;
  }

  button {
    margin: 0;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  .sr-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal !important;
  }

  @media print {
    body {
      background-color: transparent;
    }
  }
`;
