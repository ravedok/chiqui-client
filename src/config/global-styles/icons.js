import { css } from "styled-components";

import iconsWoff from "../../assets/fonts/icons/icons.woff";
import iconsEot from "../../assets/fonts/icons/icons.eot";
import iconsTtf from "../../assets/fonts/icons/icons.ttf";
import iconsSvg from "../../assets/fonts/icons/icons.svg";
import iconsEotIeFix from "../../assets/fonts/icons/icons.eot?#iefix";

export const fontIconZoom = "\f100";
export const fontIconDelete = "\f101";
export const fontIconCheck = "\f102";
export const fontIconMenu = "\f103";
export const fontIconDeleteCross = "\f104";
export const fontIconTwitter = "\f105";
export const fontIconFacebook = "\f106";

const icons = css`
  @font-face {
    font-family: "Icons";
    src: url(${iconsEot});
    src: url(${iconsEotIeFix}) format("embedded-opentype"),
      url(${iconsWoff}) format("woff"), url(${iconsTtf}) format("truetype"),
      url(${iconsSvg}) format("svg");
    font-weight: normal;
    font-style: normal;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    @font-face {
      font-family: "Icons";
      src: url(${iconsSvg}) format("svg");
    }
  }
`;

export default icons;
