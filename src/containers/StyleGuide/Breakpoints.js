import React from "react";
import styled, { css } from "styled-components";
import { media } from "../../utils";
import { theme } from "../../config";
import { lighten } from "polished";

const hightlight = `background-color: ${lighten(0.2, theme.color.primary)};`;

const Breackpoint = styled.div`
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

const BreakpointUp = Breackpoint.extend`
  span {
    ${hightlightBreakpoint(media.up)};
  }
`;

const BreakpointDown = Breackpoint.extend`
  span {
    ${hightlightBreakpoint(media.down)};
  }
`;

const BreakpointOnly = Breackpoint.extend`
  span {
    ${hightlightBreakpoint(media.only)};
  }
`;

const Breakpoints = () => {
  return (
    <div>
      <BreakpointUp>
        <strong>Up</strong>
        <span className="xs">XS</span>
        <span className="sm">SM</span>
        <span className="md">MD</span>
        <span className="lg">LG</span>
        <span className="xl">XL</span>
      </BreakpointUp>
      <BreakpointDown>
        <strong>Down</strong>
        <span className="xs">XS</span>
        <span className="sm">SM</span>
        <span className="md">MD</span>
        <span className="lg">LG</span>
        <span className="xl">XL</span>
      </BreakpointDown>

      <BreakpointOnly>
        <strong>Only</strong>
        <span className="xs">XS</span>
        <span className="sm">SM</span>
        <span className="md">MD</span>
        <span className="lg">LG</span>
        <span className="xl">XL</span>
      </BreakpointOnly>
    </div>
  );
};

export default Breakpoints;
