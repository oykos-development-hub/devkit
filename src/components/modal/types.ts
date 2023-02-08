import { ReactElement } from "react";
import { DefaultTheme } from "styled-components";

export interface ModalProps {
  theme: DefaultTheme;
  title?: string;
  content?: ReactElement | string;
  footerContent?: ReactElement[] | ReactElement;
}
