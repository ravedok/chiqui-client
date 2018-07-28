import React, { Component } from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import { theme } from "../../config";

import { Container } from "../../shared";

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ color }) => color};
  &.example-enter {
    opacity: 0.01;
    display: none;
  }
  &.example-enter-active {
    display: initial;
    opacity: 1;
    transition: opacity ${({ theme }) => theme.animation.duration}ms ease-in;
  }
  &.example-exit {
    opacity: 1;
  }
  &.example-exit-active {
    opacity: 0.01;
    transition: opacity ${({ theme }) => theme.animation.duration}ms ease-in;
  }
`;

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 0
    };
  }

  toggle = () => {
    console.log(this.state.visible);
    this.setState({
      visible: this.state.visible === 1 ? 0 : 1
    });
  };

  render() {
    const { visible } = this.state;

    return (
      <TransitionGroup>
        {visible === 0 && (
          <CSSTransition
            key={uuid()}
            timeout={theme.animation.duration}
            classNames="example"
          >
            <Box color="blue" onClick={this.toggle} />
          </CSSTransition>
        )}
        {visible === 1 && (
          <CSSTransition
            key={uuid()}
            timeout={theme.animation.duration}
            classNames="example"
          >
            <Box color="red" onClick={this.toggle} />
          </CSSTransition>
        )}
      </TransitionGroup>
    );
  }
}

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Example />
    </Container>
  );
};

export default Home;
