import { CSSProperties, DefaultTheme } from "styled-components";

export interface Tab {
  id: number | string;
  title: string;
  disabled?: boolean;
}

export interface TabsProps {
  theme: DefaultTheme;
  style?: CSSProperties;
  tabs: Tab[];
  onChange?: (tab: Tab) => void;
}