import React from "react";
import { DefaultTheme } from "styled-components";

export interface ButtonProps {
  content: React.ReactNode | string;
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<any>) => any;
  theme?: DefaultTheme;
  style?: React.CSSProperties;
}
