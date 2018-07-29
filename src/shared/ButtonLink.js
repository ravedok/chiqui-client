// import styled from "styled-components";
import Button from "./Button";
import { darken } from "polished";

const ButtonLink = Button.extend`
  background: none;
  padding: 0;
  color: ${({ theme }) => theme.color.primary};
  &:hover {
    color: ${({ theme }) => darken(0.2, theme.color.primary)};
  }
`;

export default ButtonLink;
