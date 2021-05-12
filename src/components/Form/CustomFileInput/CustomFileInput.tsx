import React from "react";

import Translate from "../../../services/translate.service";

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
    accept?: string;
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
    accept,
}: ICustomInput) => {
    const validateInput = () => {
        if (required && !value) {
            handleInput(name, { value, errors: ["INPUT_REQUIRED"] }, index);
        }
    };

    const _addDirectory = (node: any) => {
        if (node && folder) {
            node.directory = true;
            node.webkitdirectory = true;
        }
        if (node && value === null) {
            node.value = null;
        }
    };

    const handleOnChange = (name: any, val: any) => {
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
                    accept={accept}
                    multiple={multiple}
                    ref={(node) => _addDirectory(node)}
                />
                <label
                    htmlFor={`${name}${index ? "-" + index : ""}`}
                    className={`btn btn-primary px-20 py-10 btn-label ${
                        labelClass ? labelClass : "f-s-16"
                    }`}
                >
                    {Translate(label)}
                </label>
            </div>
            {errors?.map((e, i) => (
                <span
                    className={`error f-s-12 is-warning danger  ${
                        errorClass ? errorClass : ""
                    }`}
                    key={i}
                >
                    {Translate(e)}
                </span>
            ))}
        </>
    );
};

export default _csfi;
