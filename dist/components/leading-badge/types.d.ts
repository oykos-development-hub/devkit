import React, { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
export declare enum LeadingBadgeVariants {
    primary = "primary",
    warning = "warning",
    error = "error",
    success = "success"
}
export declare enum LeadingBadgeTheme {
    light = "light",
    medium = "medium",
    dark = "dark"
}
export declare enum LeadingBadgeSizes {
    md = "md",
    lg = "lg"
}
export interface LeadingBadgeProps {
    variant?: LeadingBadgeVariants | `${LeadingBadgeVariants}`;
    content?: ReactNode | string;
    badgeContent?: ReactNode | string;
    leadingBadgeTheme?: LeadingBadgeTheme | `${LeadingBadgeTheme}`;
    size?: LeadingBadgeSizes | `${LeadingBadgeSizes}`;
    style?: React.CSSProperties;
    theme?: DefaultTheme;
}
