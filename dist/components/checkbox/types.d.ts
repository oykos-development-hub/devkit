import React from "react";
import { DefaultTheme } from "styled-components";
export declare enum CheckboxSize {
    sm = "sm",
    md = "md"
}
export interface CheckboxProps {
    size?: CheckboxSize | `${CheckboxSize}`;
    disabled?: boolean;
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    style?: React.CSSProperties;
    theme?: DefaultTheme;
    checked: boolean;
}
