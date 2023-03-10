import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { ReactElement } from "react";
import { CSSProperties, DefaultTheme } from "styled-components";

export interface Tab {
  title: string;
  content: any;
  disabled?: boolean;
}

export interface TabsProps {
  theme: DefaultTheme;
  style?: CSSProperties;
  tabs: Tab[];
  renderContent?: (content: string) => ReactJSXElement;
}
