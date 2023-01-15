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

export interface IconProps {
  fill?: string;
  color?: string;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  className?: string;
  direction?: Directions | keyof typeof Directions;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  position?: Positions | keyof typeof Positions;
  theme?: DefaultTheme;
}
