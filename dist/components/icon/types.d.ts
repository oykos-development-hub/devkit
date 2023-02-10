import React from "react";
import { DefaultTheme } from "styled-components";
export declare enum Directions {
    bottom = "bottom",
    left = "left",
    right = "right",
    top = "top"
}
export declare enum Positions {
    absolute = "absolute",
    relative = "relative"
}
export declare enum IconSizes {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl"
}
export interface IconProps {
    size?: IconSizes;
    onClick?: (e?: React.MouseEvent<any>) => any;
    direction?: Directions | keyof typeof Directions;
    position?: Positions | keyof typeof Positions;
    theme?: DefaultTheme;
    style?: React.CSSProperties;
}
