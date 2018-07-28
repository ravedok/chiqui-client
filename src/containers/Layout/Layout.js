import React from "react";
import styled from "styled-components";

// import { GlobalStyles } from "../../config";

import { Header, Footer, Main } from "./index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
};

export default Layout;
