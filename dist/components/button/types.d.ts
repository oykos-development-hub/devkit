import React from "react";
import { DefaultTheme } from "styled-components";
export declare enum ButtonVariants {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary"
}
export declare enum ButtonSizes {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl"
}
export interface ButtonProps {
    content: React.ReactNode | string;
    variant?: ButtonVariants;
    disabled?: boolean;
    onClick?: (e?: React.MouseEvent<any>) => any;
    theme?: DefaultTheme;
    style?: React.CSSProperties;
    size?: ButtonSizes;
}