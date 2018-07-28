import { injectGlobal, withTheme } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyles = ({ theme, children }) => {
  injectGlobal`
  
    ${styledNormalize}
  
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
  
    body {
      margin: 0;
      padding: 0;
      font-family: ${theme.font.primary};
      font-weight: 400;
      font-size: ${theme.font.size}px;
      overflow-y: scroll;
    }    
  `;

  return children;
};

export default withTheme(GlobalStyles);