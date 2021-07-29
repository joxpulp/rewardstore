import { createGlobalStyle } from "styled-components";
import {colors} from './colors'
const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif; 
    font-size: 24px;
}

  body {
    background-color: ${colors.backgroundPrimary};
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.1;
  }

  ul, li, a, ol {
    list-style-type: none;
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
