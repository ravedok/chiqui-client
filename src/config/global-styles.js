import { injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";
import theme from "./theme";

injectGlobal`

  ${styledNormalize}

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.font.primary};
    font-weight: 400;
    font-size: ${theme.font.size}px;
  }    
`;
