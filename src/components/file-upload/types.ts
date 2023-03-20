import { ReactNode, ReactElement, CSSProperties } from "react";
import { DefaultTheme } from "styled-components";

export enum FileUploadVariants {
  primary = "primary",
  secondary = "secondary",
}

export interface FileUploadProps {
  variant: FileUploadVariants | string;
  onUpload: (files: FileList) => void;
  customContent?: JSX.Element | ReactNode | string;
  icon?: JSX.Element | ReactElement;
  multiple?: boolean;
  style?: CSSProperties;
  theme?: DefaultTheme;
}
