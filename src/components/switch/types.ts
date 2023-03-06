import React, { ReactNode } from "react";
import { DefaultTheme } from "styled-components";

export enum SwitchSizes {
  sm = "sm",
  md = "md",
}

export interface SwitchProps {
  text?: ReactNode | string;
  supportingText?: ReactNode | string;
  disabled?: boolean;
  size?: SwitchSizes | string;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}
