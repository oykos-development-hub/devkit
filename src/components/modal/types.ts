import { ReactElement } from "react";
import { CSSProperties, DefaultTheme } from "styled-components";

export enum Variants {
  light = "light",
  dark = "dark",
}
export interface ModalProps {
  theme: DefaultTheme;
  title?: string;
  content?: ReactElement | string;
  open?: boolean;
  onClose?: any;
  style?: CSSProperties;
  variant: keyof typeof Variants;
}
