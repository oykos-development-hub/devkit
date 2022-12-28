import { DefaultTheme } from "styled-components";

export interface ButtonProps {
  variant: "one";
  type?: "button" | "submit" | "reset";
  label?: string;
  width?: string;
  height?: string;
  primaryColor?: string;
  theme?: DefaultTheme;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactSVGElement;
  iconPosition?: "left" | "right";
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  gap?: string;
  padding?: string;
  margin?: string;
}
