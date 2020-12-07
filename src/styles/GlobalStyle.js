import { createGlobalStyle } from "styled-components";
import theme from "./theme";
const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
  }

  body {
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${fonts.primary};
    font-size: ${fontSizes.base};
    background-color: ${colors.orange};
    color: ${colors.pink};
  }

  #root {
    min-height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: 1px;
    margin: 0 0 10px;
    font-weight: 700;
  }

  h1, h2, h3 {
    font-weight: 900;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  p {
    margin: 0 0 10px;
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  button {
    display: inline-block;
    background-color: ${colors.white};
    color: ${colors.pink};
    font-size: ${fontSizes.base};
    font-weight: 700;
    border-radius: 20px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    
    &:hover, &:focus {
      background-color: ${colors.offwhite};
      outline: 0;
    }
  }
`;

export default GlobalStyle;
