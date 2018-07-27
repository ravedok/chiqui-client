import { css } from "styled-components";
import { theme } from "../config";

const breakpoints = theme.breakpoints;

const keys = Object.keys(breakpoints);

function toRems(px) {
  return px / theme.font.size;
}

const up = keys.reduce((accumulator, key) => {
  const emSize = toRems(breakpoints[key].min);
  accumulator[key] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

const down = keys.reduce((accumulator, key) => {
  const breakpoint = theme.breakpoints[key];

  if (breakpoint.max === null) {
    accumulator[key] = (...args) => css`
      ${css(...args)};
    `;
  } else {
    const emSize = toRems(breakpoint.max);
    accumulator[key] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
  }

  return accumulator;
}, {});

const only = keys.reduce((accumulator, key) => {
  const breakpoint = theme.breakpoints[key];

  if (!breakpoint.min) {
    accumulator[key] = (...args) => css`
      @media (max-width: ${toRems(breakpoint.max)}em) {
        ${css(...args)};
      }
    `;
  } else if (!breakpoint.max) {
    accumulator[key] = (...args) => css`
      @media (min-width: ${toRems(breakpoint.min)}em) {
        ${css(...args)};
      }
    `;
  } else {
    accumulator[key] = (...args) => css`
      @media (min-width: ${toRems(breakpoint.min)}em) and (max-width: ${toRems(
          breakpoint.max
        )}em) {
        ${css(...args)};
      }
    `;
  }
  return accumulator;
}, {});

export default {
  up,
  down,
  only
};
