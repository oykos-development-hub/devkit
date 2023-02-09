import { ReactElement } from "react";
import { CSSProperties, DefaultTheme } from "styled-components";
export type ValueType = {
    value: string;
    label: string;
};
export interface DropdownProps {
    theme: DefaultTheme;
    style?: CSSProperties;
    isSearchable?: boolean;
    isDisabled?: boolean;
    menuIsOpen?: boolean;
    isMulti?: boolean;
    showArrow?: boolean;
    options?: ValueType[];
    defaultValue?: ValueType;
    value?: ValueType;
    label?: string;
    placeholder?: string;
    noOptionsText?: string;
    controlIcon?: ReactElement;
    optionIcon?: ReactElement;
    onChange?: (option: ValueType | null) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
}