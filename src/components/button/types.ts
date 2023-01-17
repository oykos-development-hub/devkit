import React from "react";
import { DefaultTheme } from "styled-components";
import { ButtonVariants } from "./variants";

export interface ButtonProps {
  content: React.ReactNode | string;
  variant?: ButtonVariants;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<any>) => any;
  theme?: DefaultTheme;
  style?: React.CSSProperties;
}

export * from "./variants";
