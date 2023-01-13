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
    icon?: ReactElement | string | undefined;
}
export interface DropdownProps {
    data: IData[];
    placeholder?: string;
    label?: string;
    value?: number | string;
    onChange?: (newValue: any) => void;
    onBlur?: () => void;
    clearOnBlur?: boolean;
    multi?: boolean;
    disabled?: boolean;
    hoverBorderColor?: string;
    bgColor?: string;
    borderColor?: string;
    borderSize?: string;
    borderRadius?: string;
    shadowColor?: string;
    shadowSize?: string;
    handleClearColor?: string;
    itemColor?: string;
    selectedItemColor?: string;
    selectedItemBgColor?: string;
    selectedItemBorderRadius?: string;
    selectedItemBorderWidth?: string;
    selectedItemBorderColor?: string;
    itemHoverColor?: string;
    itemHoverBgColor?: string;
    dropdownBgColor?: string;
    dropdownBorderRadius?: string;
    dropdownWidth?: string;
    dropdownPadding?: string;
    dropdownMaxHeight?: string;
    dropdownSelectedItemColor?: string;
    inputColor?: string;
    fontFamily?: string;
    className?: string;
    searchable?: boolean;
    loading?: boolean;
    closeOnSelect?: boolean;
    clearable?: boolean;
    direction?: Directions | keyof typeof Directions;
    dropdownPosition?: Positions | keyof typeof Positions;
    theme?: DefaultTheme;
}
