import React from "react";

import Translate from "../../../functions/utilFunctions/translate";

interface IHandleInputProps {
    value: Array<File> | null;
    errors: Array<string>;
}

interface ICustomInput {
    name: string;
    value: Array<File> | null;
    handleInput: (
        name: string,
        data: IHandleInputProps,
        index?: number
    ) => void;
    required?: boolean;
    errors?: Array<string>;
    className?: string;
    label?: string | JSX.Element;
    labelClass?: string;
    errorClass?: string;
    index?: number;
    multiple?: boolean;
    folder?: boolean;
}

const _csfi = ({
    name,
    value,
    handleInput,
    required,
    errors,
    className,
    label,
    labelClass,
    errorClass,
    index,
    multiple,
    folder,
}: ICustomInput) => {
    const validateInput = () => {
        if (required && !value) {
            handleInput(name, { value, errors: ["INPUT_REQUIRED"] }, index);
        }
    };

    const _addDirectory = (node) => {
        if (node && folder) {
            node.directory = true;
            node.webkitdirectory = true;
        } else if (node) {
            node.directory = false;
            node.webkitdirectory = false;
        }
        if (node && value === null) {
            node.value = null;
        }
    };

    const handleOnChange = (name, val) => {
        handleInput(name, { value: val, errors: [] }, index);
    };

    return (
        <>
            <div>
                <input
                    className={`${className ? className : "f-s-16"} d-none`}
                    id={`${name}${index ? "-" + index : ""}`}
                    onChange={(e) => handleOnChange(name, e.target.files)}
                    onBlur={validateInput}
                    type="file"
                    multiple={multiple}
                    ref={(node) => _addDirectory(node)}
                />
                <label
                    htmlFor={`${name}${index ? "-" + index : ""}`}
                    className={`btn btn-primary ${
                        labelClass ? labelClass : "f-s-16"
                    }`}
                >
                    <Translate text={label} />
                </label>
            </div>
            {errors?.map((e, i) => (
                <span
                    className={`error f-s-12 is-warning danger  ${
                        errorClass ? errorClass : ""
                    }`}
                    key={i}
                >
                    <Translate text={e} />
                </span>
            ))}
        </>
    );
};

export default _csfi;
