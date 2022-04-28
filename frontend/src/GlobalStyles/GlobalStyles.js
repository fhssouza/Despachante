import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

html, body, #root {
    width: 100vw;
    height: 100vh;
    text-decoration: none;
    font-family: 'Poppins', Sans-serif;
    background-color: transparent;
    

}

*, button, input {
    border: 0;
    outline: 0;
    font-family: 'Poppins', Sans-serif;

}

button {
    cursor: pointer;
}

`;

export default GlobalStyles;