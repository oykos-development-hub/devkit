import React, { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
export declare enum SwitchSizes {
    sm = "sm",
    md = "md"
}
export interface SwitchProps {
    content?: ReactNode | string;
    disabled?: boolean;
    size?: SwitchSizes | string;
    style?: React.CSSProperties;
    theme?: DefaultTheme;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
