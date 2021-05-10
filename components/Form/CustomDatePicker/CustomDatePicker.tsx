import Translate from "functions/utilFunctions/translate";
import React from "react";

import DatePicker from "react-date-picker";
import { ArrowDownIcon } from "../../../components/Icons/Icons";

interface IHandleDateInput {
    value;
    errors: Array<string>;
}

interface IDatePicker {
    name: string;
    value: Date | undefined;
    handleInput: (name: string, { value, errors }: IHandleDateInput) => void;
    errors?: Array<string>;
    className?: string;
    disabled?: boolean;
    label?: string;
    labelClass?: string;
}

const _dp: React.FC<IDatePicker> = ({
    name,
    value,
    handleInput,
    className,
    errors,
    disabled,
    label,
    labelClass,
}) => {
    return (
        <div className={`customDatePicker p-r ${disabled ? "disabled" : ""}`}>
            <DatePicker
                onChange={(e) => handleInput(name, { value: e, errors: [] })}
                value={value}
                //activeStartDate={value}
                locale={"sr-latn-SR"}
                className={className}
                disabled={disabled}
                format="dd.MM.yyyy"
                maxDetail="month"
                minDetail="month"
                nextLabel={
                    <ArrowDownIcon
                        width={14}
                        className="calendar_next_icon_right"
                    />
                }
                prevLabel={
                    <ArrowDownIcon
                        width={14}
                        className="calendar_next_icon_left"
                    />
                }
            />
            <label
                className={`${labelClass ? labelClass : "f-s-16"} ${
                    disabled ? "disabled" : ""
                }`}
            >
                <Translate text={label} />
            </label>
            {errors?.map((e, i) => (
                <span className={`error f-s-12 is-warning danger`} key={i}>
                    <Translate text={e} />
                </span>
            ))}
        </div>
    );
};

export default _dp;
