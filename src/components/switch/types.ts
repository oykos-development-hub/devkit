import React, { ReactNode } from "react";
import { DefaultTheme } from "styled-components";

export enum SwitchSizes {
  sm = "sm",
  md = "md",
}

export interface SwitchProps {
  content?: ReactNode | string;
  disabled?: boolean;
  size?: SwitchSizes | `${SwitchSizes}`;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
