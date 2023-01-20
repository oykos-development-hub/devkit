import React, { ChangeEventHandler, FocusEventHandler, FormEventHandler, ReactNode } from "react";
import { DefaultTheme } from "styled-components";

export enum InputTypes {
  text = "text",
  number = "number",
  password = "password",
  tel = "tel",
  url = "url",
  email = "email",
  color = "color",
}

export enum InputVariants {
  standard = "standard",
  outlined = "outlined",
}

export interface InputWrapperProps {
  variant?: InputVariants | keyof typeof InputVariants;
  type?: InputTypes | keyof typeof InputTypes;
  error?: string;
  errorColor?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  textarea?: boolean;
  search?: boolean;
  confirmed?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  theme?: DefaultTheme;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface InputProps extends InputWrapperProps {
  value?: string | number;
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  pattern?: string;
  maxLength?: number;
  inputRef?: React.Ref<any>;
  clear?: (e?: any) => any;
  onChange?: ChangeEventHandler | FormEventHandler;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
}
