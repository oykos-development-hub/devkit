import React from "react";
import { DefaultTheme } from "styled-components";
export declare enum CheckboxSize {
    sm = "sm",
    md = "md"
}
export interface CheckboxProps {
    checked?: boolean;
    size?: CheckboxSize;
    disabled?: boolean;
    indeterminate?: boolean;
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    style?: React.CSSProperties;
    theme?: DefaultTheme;
}
