import styled from "styled-components";
import { css } from "styled-components";
import { IconProps, Positions } from "../types";
import { Theme } from "../../../shared/theme";

const sharedPath = css<IconProps>`
  color: ${(props) => props.style?.color || props.theme?.palette?.black || Theme?.palette?.black};
  fill: ${(props) => props.style?.color || props.theme?.palette?.black || Theme?.palette?.black};
`;

export const Svg = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})<IconProps>`
  ${sharedPath};
  position: ${(props) => props.position || Positions.relative};
  width: ${(props) => props?.size || props.style?.width || "2rem"} !important;
  height: ${(props) => props?.size || props.style?.height || "2rem"} !important;
  top: ${(props) => props.style?.top || "unset"};
  bottom: ${(props) => props.style?.bottom || "unset"};
  right: ${(props) => props.style?.right || "unset"};
  left: ${(props) => props.style?.left || "unset"};
`;

export const Path = styled.path<IconProps>`
  ${sharedPath}
`;
