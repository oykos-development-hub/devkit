import { DefaultTheme } from "styled-components";

export interface LoaderProps {
  variant?: "one" | "two" | "three";
  width?: string;
  height?: string;
  secondaryWidth?: string;
  secondaryHeight?: string;
  primaryColor?: string;
  secondaryColor?: string;
  wrapperBackgroundColor?: string;
  theme?: DefaultTheme;
}
