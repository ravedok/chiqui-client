import React, { Component } from "react";
import styled from "styled-components";

// import { GlobalStyles } from "../../config";

import { Header, Footer, Main, MobileMenu } from "./index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobileMenuShow: false
    };
  }

  openMobileMenu = () => {
    console.log("abrir");
    this.setState({
      isMobileMenuShow: true
    });
  };

  closeMobileMenu = () => {
    console.log("cerrar");
    this.setState({
      isMobileMenuShow: false
    });
  };

  render() {
    return (
      <Wrapper>
        <MobileMenu
          opened={this.state.isMobileMenuShow}
          onClose={this.closeMobileMenu}
        />
        <Header onOpenMobileMenu={this.openMobileMenu} />
        <Main />
        <Footer />
      </Wrapper>
    );
  }
}

export default Layout;
