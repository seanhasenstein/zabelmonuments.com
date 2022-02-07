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
    color: #111827;
  }

  p {
      font-size: 1rem;
      color: #374151;
      line-height: 1.65;
    }

  a {
    text-decoration: none;
  }

  button {
    margin: 0;
    cursor: pointer;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  img {
    width: 100%;
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

  select {
    padding: 0.6875rem 2.5rem 0.75rem 0.75rem;
    appearance: none;
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    color: #36383e;
    color-adjust: exact;
    background-color: #fff;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%239fa6b2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-position: right 0.5rem center;
    background-size: 1.375em 1.375em;
    background-repeat: no-repeat;
    border: 1px solid #dddde2;
    border-radius: 0.375rem;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    cursor: pointer;

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      border-color: #1967d2;
      box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, #1967d2 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
    }
  }

  @media print {
    body {
      background-color: transparent;
    }
  }
`;
