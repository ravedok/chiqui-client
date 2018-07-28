import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { lighten } from "polished";

const Wrapper = styled.nav`
  display: flex;
  ul {
    display: flex;
    list-style: none;
    padding: 0 0.5rem;
    margin: 0;
    li {
      a {
        padding: 0.5rem;
        color: ${({ theme }) => theme.color.white};
        text-decoration: none;
        &:hover {
          color: ${({ theme }) => lighten(0.2, theme.color.primary)};
        }
      }
    }
  }
`;

const Menu = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/style-guide">Guía de estilos</Link>
        </li>
        <li>
          <Link to="/about">Sobre nosotros</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Menu;
