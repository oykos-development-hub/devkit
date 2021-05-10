import React, { useState } from "react";
import { isEmpty, validateNumber } from "./inputValidations/InputValidations";

import { ShowPasswordIcon } from "../../../components/Icons/Icons";
import Translate from "../../../functions/utilFunctions/translate";
import { useFormContext } from "../CustomForm/CustomForm";
import { validateEmail } from "../../../functions/utilFunctions/validations";

interface IHandleInputProps {
    value: string | number;
    errors: Array<string>;
}

interface ICustomInput {
    name: string;
    value: string | number;
    type: "text" | "number" | "email" | "password";
    handleInput: (
        name: string,
        data: IHandleInputProps,
        index?: number
    ) => void;
    required?: boolean;
    errors?: Array<string>;
    className?: string;
    label?: string | JSX.Element;
    float?: boolean;
    preview?: boolean;
    edit?: boolean;
    labelClass?: string;
    errorClass?: string;
    index?: number;
    maxLength?: number;
}

const _csi = React.forwardRef<HTMLInputElement, ICustomInput>(
    (
        {
            name,
            value,
            handleInput,
            type,
            required,
            errors,
            className,
            label,
            float,
            preview,
            edit,
            labelClass,
            errorClass,
            index,
            maxLength,
        },
        ref
    ) => {
        const isForm = useFormContext();

        if (!isForm) {
            throw Error(
                "You can't use CustomInput outside of CustomForm component!"
            );
        }

        const [showPassword, setShowPassword] = useState(false);

        const validateInput = () => {
            if (typeof value === "string") {
                handleInput(name, {
                    value: value.replace(/\s{2,}/g, " ").trim(),
                    errors: [],
                });
            }

            if (type === "email" && !validateEmail(value)) {
                handleInput(name, { value, errors: ["EMAIL_INVALID"] }, index);
            }

            if (required && isEmpty(value)) {
                handleInput(name, { value, errors: ["INPUT_REQUIRED"] }, index);
            }
        };

        const handleShowPassword = () => {
            setShowPassword((prevState) => !prevState);
        };

        const handleOnChange = (name, val) => {
            if (type !== "number") {
                handleInput(name, { value: val, errors: [] }, index);
            } else {
                if (validateNumber(val, float)) {
                    handleInput(name, { value: val, errors: [] }, index);
                }
            }
        };
        return (
            <div className="inputComponent p-r">
                <div
                    className={`inputWrapper ${preview ? "preview" : ""} ${
                        edit ? "editable" : ""
                    }  ${value ? "hasText" : ""}`}
                >
                    <input
                        className={`  ${className ? className : "f-s-16"}`}
                        value={value}
                        onChange={(e) => handleOnChange(name, e.target.value)}
                        onBlur={validateInput}
                        maxLength={maxLength}
                        type={!showPassword ? type : "text"}
                        disabled={preview ? !edit : false}
                        ref={ref}
                    />
                    {type === "password" && (
                        <span onClick={handleShowPassword}>
                            <ShowPasswordIcon
                                width={20}
                                className={`showPassword ${
                                    showPassword ? "active" : ""
                                }`}
                            />
                        </span>
                    )}
                    <label className={`${labelClass ? labelClass : "f-s-16"}`}>
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
            </div>
        );
    }
);

export default _csi;
