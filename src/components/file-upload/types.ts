import React, { ReactElement, ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import { FileWithPath } from "react-dropzone";

export interface FileUploadProps {
  onFileUpload: (files: File[]) => void;
  content?: ReactNode | string;
  icon?: ReactElement;
  multiple?: boolean;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}
