import React from "react";
import { TypographyVariants as Variants } from "./variants";
import { DefaultTheme } from "styled-components";
export interface TypographyProps {
    content: React.ReactNode | string;
    variant?: Variants | `${Variants}`;
    onClick?: (e?: React.MouseEvent<any>) => any;
    theme?: DefaultTheme;
    style?: React.CSSProperties;
    className?: string;
}
export * from "./variants";
