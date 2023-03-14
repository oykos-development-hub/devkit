import React from "react";
import { DefaultTheme } from "styled-components";

export interface FileUploadProps {
  multiple?: boolean;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}
