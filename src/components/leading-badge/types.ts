import React, { ReactNode } from "react";
import { DefaultTheme } from "styled-components";

export enum LeadingBadgeVariants {
  primary = "primary",
  warning = "warning",
  error = "error",
  success = "success",
}

export enum LeadingBadgeTheme {
  light = "light",
  medium = "medium",
  dark = "dark",
}

export enum LeadingBadgeSizes {
  md = "md",
  lg = "lg",
}

export interface LeadingBadgeProps {
  variant?: LeadingBadgeVariants | string;
  content?: ReactNode | string;
  badgeContent?: ReactNode | string;
  leadingBadgeTheme?: LeadingBadgeTheme | string;
  size?: LeadingBadgeSizes | string;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}
