import React from "react";
import styled from "styled-components";
import { lighten } from "polished";
import { Container } from "../../shared";

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2rem;
  background-color: ${({ theme }) => theme.color.dark};
  padding: 1rem 0;

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
`;

const Menu = styled.nav`
  display: flex;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      a {
        padding: 0.5rem 1rem;
        color: ${({ theme }) => theme.color.white};
        text-decoration: none;
        &:hover {
          color: ${({ theme }) => lighten(0.2, theme.color.primary)};
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>Logo</Logo>
        <Menu>
          <ul>
            <li>
              <a href="/opcion-1">Opción 1</a>
            </li>
            <li>
              <a href="/opcion-2">Opción 2</a>
            </li>
            <li>
              <a href="/opcion-3">Opción 3</a>
            </li>
            <li>
              <a href="/opcion-3">Opción 3</a>
            </li>
          </ul>
        </Menu>
      </Container>
    </Wrapper>
  );
};

export default Header;
