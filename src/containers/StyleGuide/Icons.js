import React from "react";
import styled from "styled-components";

import { Icon } from "../../shared";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.gray500};
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 0.8rem;
  i:first-child {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;

const IconName = styled.div``;

const Example = ({ icon }) => {
  return (
    <IconBox>
      <Icon name={icon} />
      <IconName>{`icon-${icon}`}</IconName>
    </IconBox>
  );
};

const Icons = () => {
  return (
    <Wrapper>
      <Example icon="zoom" />
      <Example icon="delete" />
      <Example icon="check" />
      <Example icon="menu" />
      <Example icon="delete-cross" />
      <Example icon="twitter" />
      <Example icon="facebook" />
    </Wrapper>
  );
};

export default Icons;
