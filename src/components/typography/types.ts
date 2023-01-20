import React from "react";
import { TypographyVariants as Variants } from "./variants";
import { DefaultTheme } from "styled-components";

export interface TypographyProps {
  content: React.ReactNode | string;
  variant?: Variants | string;
  theme?: DefaultTheme;
  style?: React.CSSProperties;
}

export * from "./variants";
