import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
}

    html {
      scroll-behavior: smooth;
    }

    @media (max-width: 1080px) {
    html {
      font-size: 93.75%; //15px
    }
  }
  
    @media (max-width: 720px) {
      html {
        font-size: 87.5%; //14px
      }
  } 
    
`;

export default GlobalStyle;
