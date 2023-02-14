import React, { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
export declare enum AvatarVariants {
    circle = "circle",
    square = "square"
}
export declare enum AvatarSizes {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl"
}
export interface AvatarProps {
    variant: AvatarVariants | string;
    size?: AvatarSizes;
    src?: string;
    alt?: string;
    name?: string;
    source?: ReactNode | string;
    online?: boolean;
    statusIcon?: boolean;
    theme?: DefaultTheme;
    style?: React.CSSProperties;
}
