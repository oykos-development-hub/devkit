import React from "react";
import { DefaultTheme } from "styled-components";

export enum IconSize {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum IconPositions {
  absolute = "absolute",
  relative = "relative",
}

export interface IconProps {
  size?: IconSize | string;
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
  onClick?: (e?: React.MouseEvent<any>) => any;
  position?: IconPositions | `${IconPositions}`;
  theme?: DefaultTheme;
  style?: React.CSSProperties;
}
