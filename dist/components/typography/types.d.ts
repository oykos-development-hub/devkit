import React from "react";
import { TypographyVariants as Variants } from "./variants";
import { DefaultTheme } from "styled-components";
export interface TypographyProps {
    variant?: Variants | string;
    children?: React.ReactNode;
    color?: string;
    className?: string;
    margin?: string;
    fontFamily?: string;
    fontSize?: string;
    theme?: DefaultTheme;
}
export default Variants;
