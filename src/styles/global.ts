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
  .paginationBttns {
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }
  .paginationBttns a {
    padding: 0.5rem 0.8rem;
    border: 1px solid #fff;
    border-radius: 1rem;
  }
  .paginationBttns a:hover {
    color: black;
    background: #fff;
  }

  .paginationActive a {
    color: black;
    background: #fff;

    
  } 

  .paginationDisabled a {
    color: salmon;
    background: #fff;
  }
`;

export default GlobalStyle;