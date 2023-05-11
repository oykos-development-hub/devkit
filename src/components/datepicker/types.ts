import { ReactDatePickerProps } from "react-datepicker";
import { DefaultTheme } from "styled-components";
import { CSSProperties, ReactElement } from "react";

export interface CustomDatePickerProps extends Omit<ReactDatePickerProps, "onChange" | "selectsRange"> {
  onChange: (date: Date | [Date, Date], e?: React.SyntheticEvent) => void;
  error?: string;
  style?: CSSProperties;
  theme?: DefaultTheme;
  label?: ReactElement | string;
  selectsRange?: boolean;
  className?: string;
}
