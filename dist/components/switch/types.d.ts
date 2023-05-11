import React, { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
export declare enum SwitchSizes {
    sm = "sm",
    md = "md"
}
export interface SwitchProps {
    content?: ReactNode | string;
    checked: boolean;
    disabled?: boolean;
    size?: SwitchSizes | `${SwitchSizes}`;
    style?: React.CSSProperties;
    theme?: DefaultTheme;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    name?: string;
}
