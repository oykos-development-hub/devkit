import React, { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
export declare enum BadgeVariants {
    primary = "primary",
    secondary = "secondary",
    warning = "warning",
    error = "error",
    success = "success"
}
export declare enum BadgeSizes {
    sm = "sm",
    md = "md",
    lg = "lg"
}
export interface BadgeProps {
    variant?: BadgeVariants | `${BadgeVariants}`;
    content?: ReactNode | string;
    size?: BadgeSizes | `${BadgeSizes}`;
    style?: React.CSSProperties;
    theme?: DefaultTheme;
}
