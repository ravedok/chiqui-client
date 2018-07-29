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
    black: "#000",
    gray100: "#f8f9fa",
    gray200: "#e9ecef",
    gray300: "#dee2e6",
    gray400: "#ced4da",
    gray500: "#adb5bd",
    gray600: "#868e96",
    gray700: "#495057",
    gray800: "#343a40",
    gray900: "#212529"
  },
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1200
  },
  zIndex: {
    header: 1,
    mobileMenu: 2
  },
  animation: {
    duration: 400
  },
  headerHeight: "4rem"
};

parseBreakpoints(theme);

export default theme;
