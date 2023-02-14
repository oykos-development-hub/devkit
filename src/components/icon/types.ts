import React from "react";
import { DefaultTheme } from "styled-components";

export enum Directions {
  bottom = "bottom",
  left = "left",
  right = "right",
  top = "top",
}

export enum Positions {
  absolute = "absolute",
  relative = "relative",
}

export enum IconSizes {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export interface IconProps {
  size?: IconSizes | string;
  onClick?: (e?: React.MouseEvent<any>) => any;
  direction?: Directions | keyof typeof Directions;
  position?: Positions | keyof typeof Positions;
  theme?: DefaultTheme;
  style?: React.CSSProperties;
}
