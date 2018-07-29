import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../shared";
import Menu from "./HeaderMenu";
import MenuButton from "./MenuButton";

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2rem;
  background-color: ${({ theme }) => theme.color.dark};
  padding: 1rem 0;
  z-index: ${({ theme }) => theme.zIndex.header};

  ${Container} {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.dark};
  font-weight: bold;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  text-decoration: none;

  a {
    text-decoration: none;
  }
`;

const Header = ({ onOpenMobileMenu }) => {
  return (
    <Wrapper>
      <Container>
        <MenuButton onOpenMobileMenu={onOpenMobileMenu} />
        <Logo>
          <Link to="/">Logo</Link>
        </Logo>
        <Menu />
      </Container>
    </Wrapper>
  );
};

export default Header;
