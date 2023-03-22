import React, { ReactElement } from "react";
import { DefaultTheme } from "styled-components";
import { ReactDatePickerProps } from "react-datepicker";

export interface DatepickerTypes extends ReactDatePickerProps {
  onChange: (date: Date) => void;
  error?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}
