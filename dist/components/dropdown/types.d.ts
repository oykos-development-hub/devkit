import { ReactElement } from "react";
import { DefaultTheme } from "styled-components";
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
    defaultValue?: string | number;
    onChange?: (newValue: any) => void;
    onBlur?: () => void;
    isMulti?: boolean;
    disabled?: boolean;
    className?: string;
    noValidation?: boolean;
    isSearchable?: boolean;
    confirmed?: boolean;
    fullWidth?: boolean;
    closeMenuOnSelect?: boolean;
    isClearable?: boolean;
    theme?: DefaultTheme;
}
