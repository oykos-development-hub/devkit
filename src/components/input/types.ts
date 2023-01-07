import { ChangeEventHandler, ReactElement, ReactSVGElement } from "react";
import { DefaultTheme } from "styled-components";

export interface InputProps {
  variant: "standard" | "outlined";
  name?: string;
  label?: string;
  fontSize?: string;
  type?: string;
  placeholder?: string;
  width?: string;
  fullWidth?: boolean;
  height?: string;
  margin?: string;
  borderColor?: string;
  borderRadius?: string;
  error?: string;
  errorColor?: string;
  disabled?: boolean;
  textarea?: boolean;
  iconLeft?: ReactElement | ReactSVGElement;
  iconRight?: ReactElement | ReactSVGElement;
  theme?: DefaultTheme;
  onChange?: ChangeEventHandler;
  onFocus?: () => void;
  onBlur?: () => void;
  id?: string;
  inputRef?: any;
  inputMode?: "text" | "numeric" | "none" | "tel" | "url" | "email" | "decimal";
  value?: string;
  maxLength?: number;
  pattern?: string;
}
