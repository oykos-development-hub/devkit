import styled from "styled-components";
import { IconProps, Positions } from "../types";
import { Theme } from "../../../shared/theme";

export const Svg = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})<IconProps>`
  fill: ${(props: IconProps) => props.fill || props.theme?.palette?.black || Theme?.palette?.black};
  position: ${(props: IconProps) => props.position || Positions.relative};
  width: ${(props: IconProps) => props.width || "1rem"};
  height: ${(props: IconProps) => props.height || "1rem"};
`;

export const Path = styled.path<IconProps>`
  stroke: ${(props: IconProps) => props.style?.stroke || props.stroke};
`;
