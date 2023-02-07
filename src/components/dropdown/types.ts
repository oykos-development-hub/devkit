import { ReactElement } from "react";
import { CSSProperties, DefaultTheme } from "styled-components";

export interface DropdownProps {
  theme: DefaultTheme;
  style?: CSSProperties;
  isSearchable?: boolean;
  isDisabled?: boolean;
  menuIsOpen?: boolean;
  isMulti?: boolean;
  showArrow?: boolean;
  options?: { value: string; label: string }[];
  defaultValue?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  noOptionsText?: string;
  controlLeftIcon?: ReactElement;
  optionLeftIcon?: ReactElement;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
}
