import styled, { css } from "styled-components";
import { media } from "../../utils";
import { theme } from "../../config";
import { lighten } from "polished";

const hightlight = `background-color: ${lighten(0.2, theme.color.primary)};`;

const Breackpoints = styled.div`
  display: flex;
  align-items: center;

  strong {
    display: inline-block;
    width: 60px;
  }

  span {
    padding: 0.25rem;
    margin: 0.25rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
`;

const hightlightBreakpoint = func => {
  return Object.keys(theme.breakpoints).reduce((accumulator, key) => {
    return css`
        ${accumulator}
        &.${key} {
          ${func[key]`${() => hightlight}`};
        }
      `;
  }, "");
};

const BreakpointUp = Breackpoints.extend`
  span {
    ${hightlightBreakpoint(media.up)};
  }
`;

const BreakpointDown = Breackpoints.extend`
  span {
    ${hightlightBreakpoint(media.down)};
  }
`;

const BreakpointOnly = Breackpoints.extend`
  span {
    ${hightlightBreakpoint(media.only)};
  }
`;

export { BreakpointDown, BreakpointOnly, BreakpointUp };
