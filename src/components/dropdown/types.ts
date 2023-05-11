import { ReactElement, CSSProperties, ReactNode } from "react";
import { DefaultTheme } from "styled-components";

export type ValueType = { value: string | number; label: ReactNode | string };

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
  label?: string | ReactNode;
  placeholder?: ReactNode | string;
  noOptionsText?: string | ReactNode;
  controlIcon?: ReactElement;
  leftOptionIcon?: ReactElement;
  rightOptionIcon?: ReactElement;
  dropdownIndicator?: ReactElement;
  onChange?: (value: ValueType, e?: React.ChangeEvent) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  className?: string;
  name?: string;
}
