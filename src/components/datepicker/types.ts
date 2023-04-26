import React from "react";
import { ReactDatePickerProps } from "react-datepicker";
import { DefaultTheme } from "styled-components";

export interface CustomDatePickerProps extends Omit<ReactDatePickerProps, "onChange" | "selectsRange"> {
  onChange: (date: Date | [Date, Date]) => void;
  error?: string;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
  label?: string;
  selectsRange?: boolean;
}
