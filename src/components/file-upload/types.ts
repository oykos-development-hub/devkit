import { ReactNode, ReactElement, CSSProperties } from "react";
import { DefaultTheme } from "styled-components";

export interface FileUploadProps {
  onUpload: (files: FileList) => void;
  content?: ReactNode | string;
  icon?: JSX.Element | ReactElement;
  multiple?: boolean;
  style?: CSSProperties;
  theme?: DefaultTheme;
}
