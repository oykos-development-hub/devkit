import { ReactNode, ReactElement, CSSProperties } from "react";
import { DefaultTheme } from "styled-components";
import { ButtonVariants } from "../button/types";

export enum FileUploadVariants {
  primary = "primary",
  secondary = "secondary",
}

export interface FileUploadProps {
  variant: FileUploadVariants | `${FileUploadVariants}`;
  onUpload: (files: FileList) => void;
  customContent?: JSX.Element | ReactNode | string;
  buttonVariant?: ButtonVariants | `${ButtonVariants}`;
  buttonText?: string;
  hint?: JSX.Element | ReactNode | string;
  note?: JSX.Element | ReactNode | string;
  icon?: JSX.Element | ReactElement;
  multiple?: boolean;
  style?: CSSProperties;
  theme?: DefaultTheme;
}
