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
        overflow-x: hidden !important;
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        max-width: 100vw;
        background: ${colors.bg};
        color: ${colors.white};
    }
    a{
        text-decoration: none;
        cursor: pointer;
    }
    button{
        cursor: pointer;
    }

    .desktop {
        display: none;
    }

    @media screen and (min-width: 600px) {
        body {
            .mobile {
                display: none;
            }
        }
    }
`;

export default GlobalStyles;
