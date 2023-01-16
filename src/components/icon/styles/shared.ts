import { css } from "styled-components";
import { IconProps } from "../types";

export const sharedPath = css<IconProps>`
  color: ${(props) => props.color || props.theme?.palette?.main.one || "#fff"}!important;
  fill: ${(props) => props.color || props.theme?.palette?.main.one || "#fff"}!important;
`;

export const sharedSvg = css<IconProps>`
  position: ${(props) => props.position || "absolute"};
  width: ${(props) => props.width || 24};
  height: ${(props) => props.height || props.width || 24};
  top: ${(props) => props.top + "rem" || "0"};
  bottom: ${(props) => props.bottom + "rem" || "0"};
  right: ${(props) => props.right + "rem" || "0"};
  left: ${(props) => props.left + "rem" || "0"};
  ${sharedPath}
`;
