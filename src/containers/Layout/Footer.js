import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.color.black};
  height: 4rem;
`;

const Footer = () => {
  return <Wrapper />;
};

export default Footer;
