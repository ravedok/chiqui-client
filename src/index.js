import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import "./config/global-styles";

import { Layout } from "./containers/Layout";

ReactDOM.render(<Layout />, document.getElementById("root"));
registerServiceWorker();
