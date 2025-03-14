import { DropdownProps } from "@oykos-development/devkit-react-ts-styled-components";
import { ReactNode } from "react";

export interface ValueType {
  id: any;
  title: ReactNode;
}

export interface SSSDropdownProps extends Omit<DropdownProps, "onChange" | "options" | "value"> {
  options: ValueType[];
  onChange?: (value: ValueType, name: string) => void;
  value?: ValueType | null;
  isRequired?: boolean;
  showSearchIcon?: boolean;
}
