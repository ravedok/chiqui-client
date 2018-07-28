import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ScrollToTop } from "./shared";

import "./config/global-styles";

import { Layout } from "./containers/Layout";

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <Route render={() => <Layout />} />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
