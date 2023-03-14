import { DefaultTheme } from "styled-components";
import React from "react";

export enum AlertVariants {
  primary = "primary",
  error = "error",
  success = "success",
  info = "info",
}

export enum AlertSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export interface AlertProps {
  content?: React.ReactNode | string;
  size?: AlertSizes | string;
  variant: AlertVariants | string;
  icon?: JSX.Element | React.ReactNode;
  closeIcon?: boolean;
  description?: React.ReactNode | string;
  onClose?: (e?: React.MouseEvent<any>) => any;
  theme?: DefaultTheme;
  style?: React.CSSProperties;
}
