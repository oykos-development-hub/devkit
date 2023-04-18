import { CSSProperties, ReactElement, ReactNode } from "react";
import { DefaultTheme } from "styled-components";
export interface AccordionData {
    title: ReactNode | JSX.Element | string;
    content?: ReactNode | JSX.Element | string;
    customIcon?: ReactElement;
    style?: CSSProperties;
    theme?: DefaultTheme;
}
export interface AccordionProps {
    data: AccordionData[];
    customIcon?: ReactElement;
    style?: CSSProperties;
    theme?: DefaultTheme;
}
