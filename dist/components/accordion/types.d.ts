import React, { ReactElement, ReactSVGElement } from "react";
import { DefaultTheme } from "styled-components";
export interface AccordionProps {
    width?: string;
    variant?: "standard" | "filled";
    collapsed?: boolean;
    title: string;
    contentText?: string;
    contentElement?: ReactElement;
    scrollHeight?: number;
    theme?: DefaultTheme;
    iconRight?: ReactElement | ReactSVGElement;
    iconLeft?: ReactElement | ReactSVGElement;
    borderRadius?: string;
    backgroundColor?: string;
    hoverBackground?: string;
    collapsedColor?: string;
    children?: React.ReactNode;
}
