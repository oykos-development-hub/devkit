import React, { ReactElement } from "react";
import { CSSProperties, DefaultTheme } from "styled-components";
export declare enum Positions {
    bottom = "bottom",
    left = "left",
    right = "right",
    top = "top",
    topLeft = "topLeft",
    topRight = "topRight"
}
export interface TooltipProps {
    variant?: "standard" | "filled";
    theme?: DefaultTheme;
    position: Positions | keyof typeof Positions;
    style?: CSSProperties;
    title?: string;
    content: string | ReactElement;
    arrow?: boolean;
    children?: React.ReactNode;
}
