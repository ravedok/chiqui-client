import React, { Component } from "react";
import styled from "styled-components";
import { ButtonLink, Icon } from "../../shared";
import { media } from "../../utils";

const Wrapper = styled.div`
  ${media.up.md`
    display: none;
  `};

  ${ButtonLink} {
    margin-right: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.white};
    &:hover {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

class MenuButton extends Component {
  render() {
    return (
      <Wrapper>
        <ButtonLink onClick={this.props.onOpenMobileMenu}>
          <Icon name="menu" />
        </ButtonLink>
      </Wrapper>
    );
  }
}

export default MenuButton;
