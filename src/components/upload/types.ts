import { CSSProperties, DefaultTheme } from "styled-components";

export interface UploadProps {
  theme?: DefaultTheme;
  handleUpload?: (files: File | File[]) => void;
  maxFileSizeInBytes?: number;
  multiple?: boolean;
  showList?: boolean;
  hasList?: boolean;
  dropZone?: boolean;
  dragNDropTitle?: string;
  buttonContent?: string;
  style?: CSSProperties;
}
