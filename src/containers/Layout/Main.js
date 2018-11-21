import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import { About, Characters, Finder, Home, StyleGuide } from "../index";

const Wrapper = styled.main`
  flex-grow: 1;
  margin-top: 4rem;
  position: relative;
`;

const Main = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/style-guide" component={StyleGuide} />
        <Route path="/about" component={About} />
        <Route path="/character" component={Characters} />
        <Route path={"/:postalCode"} component={Finder} />
      </Switch>
    </Wrapper>
  );
};

export default Main;
