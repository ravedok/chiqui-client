import { injectGlobal, withTheme } from "styled-components";
import styledNormalize from "styled-normalize";
// import icons from "./icons";

import icons from "./icons";

const GlobalStyles = ({ theme, children }) => {
  injectGlobal`
  
  ${styledNormalize}
  ${icons}
  
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
  
    body {
      margin: 0;
      padding: 0;
      font-family: ${theme.font.primary};
      font-weight: 400;
      font-size: ${theme.font.size}px;
      overflow-y: scroll;
    }    

    a {
      color: ${({ theme }) => theme.color.primary};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  `;

  return children;
};

export default withTheme(GlobalStyles);
