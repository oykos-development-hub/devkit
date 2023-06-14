/// <reference types="react" />
import { CSSProperties, DefaultTheme } from "styled-components";
export interface Tab {
    id: number | string;
    title: string | React.ReactNode;
    disabled?: boolean;
    routeName?: string;
}
export interface TabsProps {
    theme?: DefaultTheme;
    style?: CSSProperties;
    tabs: Tab[];
    onChange: (tab: Tab) => void;
    className?: string;
    activeTab: string | number;
}
