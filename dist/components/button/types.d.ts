import React from "react";
import { DefaultTheme } from "styled-components";
export declare const ButtonVariants: {
    readonly primary: "primary";
    readonly secondary: "secondary";
    readonly tertiary: "tertiary";
};
export declare const ButtonSizes: {
    readonly xs: "xs";
    readonly sm: "sm";
    readonly md: "md";
    readonly lg: "lg";
    readonly xl: "xl";
};
export interface ButtonProps {
    content: React.ReactNode | string;
    variant?: keyof typeof ButtonVariants;
    disabled?: boolean;
    onClick?: (e?: React.MouseEvent<any>) => any;
    theme?: DefaultTheme;
    style?: React.CSSProperties;
    size?: keyof typeof ButtonSizes;
}
