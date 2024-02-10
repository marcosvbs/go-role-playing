import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Crimson Text', serif;
    font-weight: 600;
    line-height: 1.5;
    color: ${(props) => props.theme.white};
  }

  h1 {
    font-size: 3.875rem;
  }

  h2 {
    font-size: 3.0625rem;
  }

  h3 {
    font-size: 2.1875rem;
  }

  h4 {
    font-size: 1.5625rem;
  }

  h5 {
    font-size: 1.3125rem;
  }

  body, input, textarea {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  button, a {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    line-height: 1.5;
  }
`;
