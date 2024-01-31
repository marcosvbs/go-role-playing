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
    color: ${(props) => props.theme.white};
  }

  body, input, textarea {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  button, a {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
  }
`;
