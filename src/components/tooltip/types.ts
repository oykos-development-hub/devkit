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

export enum TooltipVariants {
  standard = "standard",
  filled = "filled",
}

export interface TooltipProps {
  variant: TooltipVariants | `${TooltipVariants}`;
  theme: DefaultTheme;
  position: Positions | `${Positions}`;
  style?: CSSProperties;
  title?: string;
  content: string | ReactElement;
  arrow?: boolean;
  children?: React.ReactNode;
}
