import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "../../config";

import { Header, Footer, Main } from "./index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
