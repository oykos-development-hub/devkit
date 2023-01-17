import { DefaultTheme } from "styled-components";
import React from "react";
export declare enum DateFormat {
    DD_MM_YYYY = "dd/MM/yyyy",
    MM_DD_YYYY = "MM/dd/yyyy",
    YYYY_MM_DD = "yyyy/MM/dd",
    DD_MM_YYYY_HYPHEN = "dd-MM-yyyy",
    MM_DD_YYYY_HYPHEN = "MM-dd-yyyy",
    YYYY_MM_DD_HYPHEN = "yyyy-MM-dd",
    MM_DD_YYYY_DOT = "MM.dd.yyyy.",
    DD_MM_YYYY_DOT = "dd.MM.yyyy",
    YYYY_MM_DD_DOT = "yyyy.MM.dd",
    DD_MONTH_YYYY = "dd MMMM yyyy",
    MONTH_DD_YYYY = "MMMM dd yyyy",
    YYYY_DD_MONTH = "yyyy MMMM dd"
}
export interface RangeDatePickerProps {
    startDateValue: Date;
    endDateValue: Date;
    label?: string;
    name?: string;
    dateFormat?: DateFormat | keyof typeof DateFormat;
    className?: string;
    onRangeChange: (start: Date, end: Date) => void;
    placeholderText?: string;
    theme?: DefaultTheme;
    styleWrapper?: React.CSSProperties;
}
