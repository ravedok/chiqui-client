import styled from "styled-components";
import { darken } from "polished";

const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0;
  text-decoration: none;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover,
  &:focus {
    background: ${({ theme }) => darken(0.2, theme.color.primary)};
    outline: 0;
  }

  &:focus {
  }

  &:active {
  }
`;

export default Button;
