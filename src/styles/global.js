import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    /* border: 1px dotted brown; */
    box-sizing: border-box;
    transition: 0.2s;
  }

  body {    
    background-color: ${({ theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme}) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;    

    overflow-y: auto;
    /* min-height: 101vh; */

    &::-webkit-scrollbar {
        width: 8px;
        background: transparent;          
        overflow: overlay;
    }

    &::-webkit-scrollbar-track {
        display: block;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 8px;
    }
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  main { 
    /* min-height: 101vh; */
    max-width: 1366px;
    margin: auto;  
    padding: 0px 123px 40px 123px;    
  }

  a {
    text-decoration: none;   
  }

  button, a {
    cursor: pointer;
    transition: filter 0.3s;
  }

  button:hover, a:hover{
    filter: brightness(0.8);
  }

  input {
    border: none
  }
`;