import { css } from "styled-components";
import { IconProps } from "../types";

export const sharedPath = css<IconProps>`
  "color": ${(props: IconProps) => props.color || props.theme?.palette?.main.one || "#7E8A96"};
  "fill": ${(props: IconProps) => props.fill || props.theme?.palette?.main.one || "#7E8A96"};
`;

export const sharedSvg = css<IconProps>`
"width": ${(props: IconProps) => props.width || 24};
"height": ${(props: IconProps) => props.height || props.width || 24};
  ${sharedPath}
`;
