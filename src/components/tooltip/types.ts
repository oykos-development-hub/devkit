import React, { ReactElement } from "react";
import { CSSProperties, DefaultTheme } from "styled-components";

export enum Positions {
  bottom = "bottom",
  left = "left",
  right = "right",
  top = "top",
  topLeft = "topLeft",
  topRight = "topRight",
}

export enum Variants {
  standard = "standard",
  filled = "filled",
}

export interface TooltipProps {
  variant: keyof typeof Variants;
  theme: DefaultTheme;
  position: keyof typeof Positions;
  style?: CSSProperties;
  title?: string;
  content: string | ReactElement;
  arrow?: boolean;
  children?: React.ReactNode;
}