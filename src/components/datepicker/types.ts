import { FormatFunction } from "@datepicker-react/styled";
import React from "react";
import { DefaultTheme } from "styled-components";

export interface DatepickerTypes {
  focusedInput: string;
  displayFormat?: string | FormatFunction;
  showCalendarIcon?: boolean;
  onClose?(): void;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}
