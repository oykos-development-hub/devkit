import { DefaultTheme } from "styled-components";
import React from "react";
export declare enum AlertVariants {
    primary = "primary",
    error = "error",
    success = "success",
    info = "info"
}
export declare enum AlertSizes {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl"
}
export interface AlertProps {
    content?: React.ReactNode | string;
    size?: AlertSizes;
    variant: AlertVariants;
    button?: JSX.Element | React.ReactNode;
    className?: string;
    icon?: JSX.Element | React.ReactNode;
    closeIcon?: boolean;
    additionalText?: string;
    onClose?: (e?: React.MouseEvent<any>) => any;
    children?: JSX.Element | React.ReactNode;
    theme?: DefaultTheme;
    style?: React.CSSProperties;
}
