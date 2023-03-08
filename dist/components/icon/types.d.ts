import React from "react";
import { DefaultTheme } from "styled-components";
export declare enum IconSize {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl"
}
export declare enum Positions {
    absolute = "absolute",
    relative = "relative"
}
export interface IconProps {
    size?: IconSize | string;
    onClick?: (e?: React.MouseEvent<any>) => any;
    position?: Positions | keyof typeof Positions;
    theme?: DefaultTheme;
    style?: React.CSSProperties;
}
