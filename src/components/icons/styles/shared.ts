import styled from "styled-components";
import { SSSIconProps } from "../types";
import { Theme } from "../../../shared/theme";

export const Svg = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})<SSSIconProps>`
  fill: ${(props: SSSIconProps) => props.fill || props.theme?.palette?.black || Theme?.palette?.black};
  position: ${(props: SSSIconProps) => props.position || "relative"};
  width: ${(props: SSSIconProps) => props.width || "1rem"};
  height: ${(props: SSSIconProps) => props.height || "1rem"};
`;

export const Path = styled.path<SSSIconProps>`
  stroke: ${(props: SSSIconProps) => props.style?.stroke || props.stroke};
`;
