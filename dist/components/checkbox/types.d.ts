import { CheckboxProps } from "@oykos-development/devkit-react-ts-styled-components";
export interface SSSCheckboxProps extends Omit<CheckboxProps, "onClick"> {
    name: string;
    onChange: any;
}
