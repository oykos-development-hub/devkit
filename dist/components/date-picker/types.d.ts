import { CustomDatePickerProps } from "@oykos-development/devkit-react-ts-styled-components";
export interface SSSDatepickerProps extends Omit<CustomDatePickerProps, "onChange"> {
    onChange: (date: Date | [Date, Date]) => void;
    isRequired?: boolean;
}
