import { ReactElement } from "react";
import { CSSProperties, DefaultTheme } from "styled-components";

export interface ModalProps {
  theme: DefaultTheme;
  title?: string;
  content?: ReactElement | string;
  open?: boolean;
  onClose?: any;
  style?: CSSProperties;
  variant?: "dark" | "light";
}
