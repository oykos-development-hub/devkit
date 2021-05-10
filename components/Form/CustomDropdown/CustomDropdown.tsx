import React, { useState } from "react";
import Select from "react-select";
import Translate from "../../../functions/utilFunctions/translate";

interface IHandleInputProps {
    value: string | number;
    errors: Array<string>;
}

interface IData {
    value: string | number;
    label: string | JSX.Element;
}

interface ICustomDropdown {
    data: Array<IData>;
    name: string;
    handleChange: (
        name: string,
        data: IHandleInputProps,
        index?: number,
        multiple?: boolean
    ) => void;
    placeholder?: string | JSX.Element;
    index?: number;
    value?: IData | Array<IData>;
    className?: string;
    required?: boolean;
    errors?: Array<string>;
    disabled?: boolean;
    multiple?: boolean;
    label?: string;
    labelClass?: string;
}

const _cdd: React.FC<ICustomDropdown> = ({
    data,
    placeholder,
    name,
    handleChange,
    value,
    index,
    className,
    errors,
    disabled,
    label,
    labelClass,
    multiple,
}) => {
    const handleValueChange = (n, v, i, m) => {
        handleChange(n, { value: v, errors: [] }, i, m);
    };

    const [showLabel, setShowLabel] = useState(false);

    const handleLabelChange = (showLabel) => {
        setShowLabel(showLabel);
    };

    return (
        <div
            className={`customDropdown p-r ${
                (!Array.isArray(value) && value?.value === 0) ||
                (Array.isArray(value) && value.length > 0)
                    ? "noValue"
                    : ""
            } ${disabled ? "disabled" : ""} ${multiple ? "multiple" : ""}`}
        >
            <Select
                className={`basic-single ${className ? className : ""} ${
                    disabled ? "disabled" : ""
                }`}
                classNamePrefix="select"
                isSearchable={true}
                name="color"
                options={data}
                noDataRenderer={"Nema rezultata"}
                onChange={(e) => {
                    handleValueChange(
                        name,
                        !multiple ? e.value : e,
                        index,
                        multiple
                    );
                    handleLabelChange(false);
                }}
                placeholder={placeholder}
                menuPlacement="auto"
                value={value}
                isDisabled={disabled}
                onFocus={() => handleLabelChange(true)}
                onBlur={() => handleLabelChange(false)}
                isMulti={multiple}
                // menuIsOpen
            />
            <label
                className={`${labelClass ? labelClass : "f-s-16"} ${
                    (!Array.isArray(value) && value?.value !== 0) ||
                    (Array.isArray(value) && value.length > 0) ||
                    showLabel
                        ? "top"
                        : ""
                } ${disabled ? "disabled" : ""}`}
            >
                <Translate text={label} />
            </label>
            {errors?.map((e, i) => (
                <span className="error f-s-12 is-warning danger p-10" key={i}>
                    <Translate text={e} />
                </span>
            ))}
        </div>
    );
};

export default _cdd;
