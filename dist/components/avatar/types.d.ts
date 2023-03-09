import React, { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
export declare enum AvatarSizes {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl"
}
export interface AvatarProps {
    size?: AvatarSizes;
    src?: string;
    alt?: string;
    supportingText?: boolean;
    name?: ReactNode | string;
    email?: ReactNode | string;
    online?: boolean;
    statusIcon?: boolean;
    theme?: DefaultTheme;
    style?: React.CSSProperties;
}
