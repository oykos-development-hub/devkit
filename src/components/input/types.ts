import { ChangeEventHandler, FocusEventHandler, ReactElement, ReactNode, Ref } from "react";
import { CSSProperties, DefaultTheme } from "styled-components";

export interface InputProps {
  name?: string;
  value?: string;
  theme?: DefaultTheme;
  style?: CSSProperties;
  disabled?: boolean;
  label?: ReactNode | string;
  textarea?: boolean;
  leftContent?: ReactElement;
  rightContent?: ReactElement;
  error?: string;
  hint?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<any>;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
  id?: string;
  type?: string;
  inputRef?: Ref<HTMLInputElement>;
  inputMode?: "text" | "numeric" | "none" | "tel" | "url" | "email" | "decimal";
  maxLength?: number;
  pattern?: string;
  rows?: number;
  cols?: number;
}
