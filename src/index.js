import React from "react";
import { render } from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./config";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ScrollToTop } from "./shared";

// import "./config/global-styles";

import { Layout } from "./containers/Layout";

render(
  <ThemeProvider theme={theme}>
    <GlobalStyles>
      <Router>
        <ScrollToTop>
          <Route render={() => <Layout />} />
        </ScrollToTop>
      </Router>
    </GlobalStyles>
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
