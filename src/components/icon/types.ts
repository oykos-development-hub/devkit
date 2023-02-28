import React from "react";
import { DefaultTheme } from "styled-components";

export enum Positions {
  absolute = "absolute",
  relative = "relative",
}

export interface IconProps {
  size?: string;
  onClick?: (e?: React.MouseEvent<any>) => any;
  position?: Positions | keyof typeof Positions;
  theme?: DefaultTheme;
  style?: React.CSSProperties;
}
