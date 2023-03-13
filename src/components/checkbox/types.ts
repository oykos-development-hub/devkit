import React from "react";
import { DefaultTheme } from "styled-components";

export enum CheckboxSize {
  sm = "sm",
  md = "md",
}

export interface CheckboxProps {
  checked?: boolean;
  size?: CheckboxSize;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}
