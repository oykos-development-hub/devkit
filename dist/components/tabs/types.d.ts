import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { CSSProperties, DefaultTheme } from "styled-components";
export interface Tab {
    title: string;
    content: any;
}
export interface TabsProps {
    theme: DefaultTheme;
    style?: CSSProperties;
    tabs: Tab[];
    disabledTabs?: string[];
    renderContent?: (content: string) => ReactJSXElement;
}
