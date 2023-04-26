import React from "react";
import { DefaultTheme } from "styled-components";

export enum RadioSize {
  sm = "sm",
  md = "md",
}

export interface RadioProps {
  size?: RadioSize | `${RadioSize}`;
  checked?: boolean;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}
