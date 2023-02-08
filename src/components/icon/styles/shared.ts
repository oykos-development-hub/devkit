import styled from "styled-components";
import { css } from "styled-components";
import { IconProps, Positions } from "../types";
import { Theme } from "../../../shared/theme";

const sharedPath = css<IconProps>`
  color: ${(props) => props.style?.color || props.theme?.palette?.black || Theme?.palette?.black} !important;
  fill: ${(props) => props.style?.color || props.theme?.palette?.black || Theme?.palette?.black} !important;
`;

export const Svg = styled.svg<IconProps>`
  ${sharedPath};
  position: ${(props) => props.position || Positions.relative};
  width: ${(props) => props?.size || props.style?.width || "1rem"} !important;
  height: ${(props) => props?.size || props.style?.height || props.style?.width || "1rem"} !important;
  top: ${(props) => props.style?.top || "initial"};
  bottom: ${(props) => props.style?.bottom || "initial"};
  right: ${(props) => props.style?.right || "initial"};
  left: ${(props) => props.style?.left || "initial"};
`;

export const Path = styled.path<IconProps>`
  ${sharedPath}
`;
