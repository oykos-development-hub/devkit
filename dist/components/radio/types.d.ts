import React from "react";
import { DefaultTheme } from "styled-components";
export declare enum RadioSize {
    sm = "sm",
    md = "md"
}
export interface RadioProps {
    checked?: boolean;
    size?: RadioSize | `${RadioSize}`;
    disabled?: boolean;
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    style?: React.CSSProperties;
    theme?: DefaultTheme;
}
