import React from "react";
import styled from "styled-components";

import {
  fontIconZoom,
  fontIconDelete,
  fontIconCheck,
  fontIconMenu,
  fontIconDeleteCross,
  fontIconTwitter,
  fontIconFacebook
} from "../config";

const StyledIcon = styled.i`
  display: inline-block;
  font-family: Icons;
  font-size: 1em;
  font-style: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;

  &.icon-zoom:before {
    content: "${fontIconZoom}";
  }
  
  &.icon-delete:before {
    content: "${fontIconDelete}";
  }
  &.icon-check:before {
    content: "${fontIconCheck}";
  }
  &.icon-menu:before {
    content: "${fontIconMenu}";
  }
  &.icon-delete-cross:before {
    content: "${fontIconDeleteCross}";
  }
  &.icon-twitter:before {
    content: "${fontIconTwitter}";
  }
  &.icon-facebook:before {
    content: "${fontIconFacebook}";
  }

`;

const Icon = ({ name }) => {
  return <StyledIcon className={`icon-${name}`} />;
};

export default Icon;
