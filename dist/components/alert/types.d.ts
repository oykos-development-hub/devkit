import { DefaultTheme } from "styled-components";
import React from "react";
export declare enum AlertVariants {
    primary = "primary",
    error = "error",
    success = "success",
    info = "info",
    warning = "warning"
}
export declare enum AlertSizes {
    sm = "sm",
    md = "md",
    lg = "lg"
}
export interface AlertProps {
    content?: React.ReactNode | string;
    size?: AlertSizes | `${AlertSizes}`;
    variant: AlertVariants | `${AlertVariants}`;
    icon?: JSX.Element | React.ReactNode;
    closeIcon?: boolean;
    description?: React.ReactNode | string;
    onClose?: (e?: React.MouseEvent<any>) => any;
    theme?: DefaultTheme;
    style?: React.CSSProperties;
}
