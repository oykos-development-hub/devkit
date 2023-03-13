import React, { ReactNode } from "react";
import { DefaultTheme } from "styled-components";

export enum BadgeVariants {
  primary = "primary",
  secondary = "secondary",
  warning = "warning",
  error = "error",
  success = "success",
}

export enum BadgeSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export interface BadgeProps {
  variant?: BadgeVariants | string;
  content?: ReactNode | string;
  size?: BadgeSizes | string;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}
