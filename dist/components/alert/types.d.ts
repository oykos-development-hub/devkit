import { DefaultTheme } from "styled-components";
import React from "react";
export declare enum AlertVariants {
    primary = "primary",
    error = "error",
    success = "success",
    info = "info"
}
export declare enum AlertSizes {
    sm = "sm",
    md = "md",
    lg = "lg"
}
export interface AlertProps {
    content?: React.ReactNode | string;
    size?: AlertSizes;
    variant: AlertVariants;
    icon?: JSX.Element | React.ReactNode;
    closeIcon?: boolean;
    additionalText?: string;
    onClose?: (e?: React.MouseEvent<any>) => any;
    theme?: DefaultTheme;
    style?: React.CSSProperties;
}
