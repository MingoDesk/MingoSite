import { createGlobalStyle } from "styled-components";
import { colors } from "../Assets/Other/themes";
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Sofia Pro", Helvetica, Arial, sans-serif;
  }
  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: darkgray;
    }
    &::-webkit-scrollbar-track {
      background-color: #333;
    }
    overflow-x: hidden;
  }
  body {
    font-family: Sofia Pro, Helvetica, Arial, sans-serif;
    width: 100%;
    overflow-x: hidden;
    background: ${colors.bg};
    color: ${colors.white};
    text-align: center;
  }
  a {
    text-decoration: none;
  }

  .mobile {
    display: none;
  }

  @media screen and (max-width: 600px) {
    body {
      .desktop {
        display: none;
      }
      .mobile {
        display: initial;
      }
    }
  }
`;

export default GlobalStyles;
