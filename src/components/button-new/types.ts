import React from "react";
import { DefaultTheme } from "styled-components";

export type ButtonVariants = "primary" | "secondary" | "tertiary";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ButtonProps {
  content: React.ReactNode | string;
  variant?: ButtonVariants;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<any>) => any;
  theme?: DefaultTheme;
  style?: React.CSSProperties;
  size?: ButtonSize;
}
