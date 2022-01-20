import { createGlobalStyle } from "styled-components";
import { colors } from "../Assets/Other/stylingcolors";
const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    html{
        &::-webkit-scrollbar{
            width: .5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
        &::-webkit-scrollbar-track{
            background-color: #333;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        overflow-x: hidden;
        background: ${colors.bg};
        color: ${colors.white};
    }
    a{
        text-decoration: none;
    }
`;

export default GlobalStyles;
