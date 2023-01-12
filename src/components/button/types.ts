import React from "react";
import { DefaultTheme } from "styled-components";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  label?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  borderWidth?: string;
  icon?: React.ReactSVGElement | React.ReactElement;
  iconPosition?: "left" | "right";
  gap?: string;
  color?: string;
  theme?: DefaultTheme;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}
