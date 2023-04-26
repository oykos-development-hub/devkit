import { ReactNode, ReactElement, CSSProperties } from "react";
import { DefaultTheme } from "styled-components";
import { ButtonSizes, ButtonVariants } from "../button/types";

export enum FileUploadVariants {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
}

export interface FileUploadProps {
  variant: FileUploadVariants | `${FileUploadVariants}`;
  onUpload: (files: FileList) => void;
  customContent?: JSX.Element | ReactNode | string;
  customButton?: JSX.Element | ReactNode;
  buttonVariant?: ButtonVariants | `${ButtonVariants}`;
  buttonSize?: ButtonSizes | `${ButtonSizes}`;
  buttonText?: string;
  hint?: JSX.Element | ReactNode | string;
  note?: JSX.Element | ReactNode | string;
  icon?: JSX.Element | ReactElement;
  multiple?: boolean;
  style?: CSSProperties;
  theme?: DefaultTheme;
}
