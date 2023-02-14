import React from "react";
import { DefaultTheme } from "styled-components";

/*
export enum ButtonVariants {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
}

export enum ButtonSizes {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}
*/

export const ButtonVariants = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
} as const;

export const ButtonSizes = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
} as const;

export interface ButtonProps {
  content: React.ReactNode | string;
  variant?: keyof typeof ButtonVariants;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<any>) => any;
  theme?: DefaultTheme;
  style?: React.CSSProperties;
  size?: keyof typeof ButtonSizes;
}
