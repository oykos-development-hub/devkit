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
export interface IconProps {
    size?: string;
    onClick?: (e?: React.MouseEvent<any>) => any;
    direction?: Directions | keyof typeof Directions;
    position?: Positions | keyof typeof Positions;
    theme?: DefaultTheme;
    style?: React.CSSProperties;
}
