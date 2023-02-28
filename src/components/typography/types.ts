import React from "react";
import { TypographyVariants as Variants, WeightVariants } from "./variants";
import { DefaultTheme } from "styled-components";

export interface TypographyProps {
  content: React.ReactNode | string;
  variant?: Variants | string;
  fontWeight?: WeightVariants | string;
  fontSize?: string;
  onClick?: (e?: React.MouseEvent<any>) => any;
  theme?: DefaultTheme;
  style?: React.CSSProperties;
}

export * from "./variants";
