import { parseBreakpoints } from "../utils/parseBreakpoints";

let theme = {
  font: {
    primary: "Montserrat, sans-serif",
    size: 16
  },
  color: {
    primary: "#4f78e2",
    dark: "#2644a6",
    white: "#FFF",
    black: "#000"
  },
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1200
  },
  headerHeight: "4rem"
};

parseBreakpoints(theme);

export default theme;
