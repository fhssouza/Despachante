import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100vw;
    height: 100vh;
    font-family: 'Poppins', Sans-serif;
    background-color:  #000;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

}

`;

export default GlobalStyles;
