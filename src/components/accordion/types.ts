import { CSSProperties, ReactElement, ReactNode } from "react";
import { DefaultTheme } from "styled-components";

export interface AccordionData {
  title?: ReactNode | JSX.Element | string;
  content?: ReactNode | JSX.Element | string;
  customHeader?: ReactElement;
  customContent?: ReactElement;
  style?: CSSProperties;
  theme?: DefaultTheme;
}

export interface AccordionProps {
  data: AccordionData[];
  style?: CSSProperties;
  theme?: DefaultTheme;
  className?: string;
}
