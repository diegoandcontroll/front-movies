import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
  body {
    margin: 0;
    padding: 0;
    background: #BF61AA;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    overflow-x: hidden;
  }
`;
 
export default GlobalStyle;