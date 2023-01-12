import { ReactElement } from "react";
import { DefaultTheme } from "styled-components";
export declare enum Positions {
    auto = "auto",
    top = "top",
    bottom = "bottom"
}
export declare enum Directions {
    rtl = "rtl",
    ltr = "ltr"
}
export interface IData {
    value: string | number;
    label: string;
    icon?: ReactElement | string;
}
export interface DropdownProps {
    data: IData[];
    placeholder?: string;
    label?: string;
    value?: number | string;
    onChange?: (newValue: any) => void;
    onBlur?: () => void;
    clearOnBlur: boolean;
    multi?: boolean;
    disabled?: boolean;
    color: string;
    className?: string;
    searchable?: boolean;
    confirmed?: boolean;
    loading?: boolean;
    closeOnSelect?: boolean;
    clearable?: boolean;
    direction?: Directions | keyof typeof Directions;
    dropdownPosition?: Positions | keyof typeof Positions;
    theme?: DefaultTheme;
}
