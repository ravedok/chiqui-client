import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { transparentize } from "polished";
import { ButtonLink, Icon } from "../../shared";

const Wrapper = styled.div`
  position: fixed;
  display: ${({ opened }) => (opened ? "block" : "none")};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex.mobileMenu};
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => transparentize(0.2, theme.color.black)};
  z-index: 0;
  transition: opacity ${({ theme }) => theme.animation.duration};
`;

const WrapperMenu = styled.nav`
  position: relative;
  background-color: ${({ theme }) => theme.color.white};
  width: 20rem;
  max-width: 100%;
  min-height: 100%;
  border-right: 4px solid red;
  padding: 1rem;
  box-sizing: border-box;
  z-index: 1;
  transition: transform ${({ theme }) => theme.animation.duration};
  ul {
    list-style: none;
  }
`;

const ButtonClose = ButtonLink.extend`
  padding: 0.5rem;
`;

const Menu = ({ onClose }) => {
  return (
    <WrapperMenu>
      <ButtonClose onClick={onClose}>
        <Icon name="delete-cross" />
      </ButtonClose>

      <ul>
        <li>
          <Link to="/style-guide">Guía de estilos</Link>
        </li>
        <li>
          <Link to="/about">Sobre nosotros</Link>
        </li>
      </ul>
    </WrapperMenu>
  );
};

const MobileMenu = ({ opened, onClose }) => {
  return (
    <Wrapper opened={opened}>
      <Backdrop onClick={onClose} />
      <Menu onClose={onClose} />
    </Wrapper>
  );
};

export { MobileMenu };
