import { CSSProperties, ReactElement, MouseEvent } from "react";
import { DefaultTheme } from "styled-components";
export interface Item {
    name: string;
    to: string;
    icon?: ReactElement;
}
export interface BreadcrumbsProps {
    theme: DefaultTheme;
    style?: CSSProperties;
    items?: Item[];
    onClick?: (e?: MouseEvent<HTMLAnchorElement>) => any;
    separator?: ReactElement;
}
