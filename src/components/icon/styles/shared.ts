import { css } from "styled-components";
import { IconProps } from "../types";

export const sharedPath = css<IconProps>`
  color: ${(props: IconProps) => props.color || props.theme?.palette?.main.one || "#fff"};
  fill: ${(props: IconProps) => props.color || props.theme?.palette?.main.one || "#fff"};
`;

export const sharedSvg = css<IconProps>`
  position: ${(props) => props.position || "absolute"};
  width: ${(props) => props.width || 24};
  height: ${(props) => props.height || props.width || 24};
  top: ${(props) => props.top || "0"};
  bottom: ${(props) => props.bottom || "0"};
  right: ${(props) => props.right || "0"};
  left: ${(props) => props.left || "0"};
  ${sharedPath}
`;
