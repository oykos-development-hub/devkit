import { ReactElement, CSSProperties } from "react";
import { DefaultTheme } from "styled-components";
export type ValueType = {
    value: string | number;
    label: string;
};
export interface DropdownProps {
    theme?: DefaultTheme;
    style?: CSSProperties;
    isClearable?: boolean;
    isSearchable?: boolean;
    isDisabled?: boolean;
    backspaceRemovesValue?: boolean;
    menuIsOpen?: boolean;
    isMulti?: boolean;
    showArrow?: boolean;
    closeMenuOnSelect?: boolean;
    options?: ValueType[];
    defaultValue?: ValueType;
    value?: ValueType;
    label?: string;
    placeholder?: string;
    noOptionsText?: string;
    controlIcon?: ReactElement;
    leftOptionIcon?: ReactElement;
    rightOptionIcon?: ReactElement;
    dropdownIndicator?: ReactElement;
    onChange?: (e: ValueType) => void;
    onBlur?: () => void;
    onFocus?: () => void;
}
