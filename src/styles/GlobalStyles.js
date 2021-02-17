import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-family: 'Merriweather', serif;
}

*, *:before, *:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  color: #323842;
}

p {
    font-family: 'Poppins', sans-serif;
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
`;
