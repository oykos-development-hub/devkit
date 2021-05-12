import React from "react";
import { isEmpty } from "../CustomInput/inputValidations/InputValidations";
import Translate from "../../../services/translate.service";
import { useFormContext } from "../CustomForm/CustomForm";
import { SendArrow } from "../../Icons/Icons";

interface IHandleInputProps {
    value: string | number;
    errors: Array<string>;
}

interface ICustomInput {
    name: string;
    value: string;
    handleInput: (name: string, data: IHandleInputProps) => void;
    required?: boolean;
    errors?: Array<string>;
    className?: string;
    label?: string;
    labelClass?: string;
    placeholder?: string;
    disabled?: boolean;
    icon?: boolean;
    handleSend?: (e: any) => void;
    handleFile?: any;
}

const _cta: React.FC<ICustomInput> = ({
    value,
    label,
    labelClass,
    placeholder,
    handleInput,
    name,
    className,
    required,
    errors,
    icon,
    disabled,
    handleSend,
}: // handleFile,
ICustomInput) => {
    const isForm = useFormContext();
    if (!isForm) {
        throw Error(
            "You can't use CustomTextArea outside of CustomForm component!"
        );
    }

    const handleCounter = (val: any) => {
        const element = document.getElementById(`${name}`);
        if (element) {
            element.innerHTML = val;
        }
    };

    const validateInput = () => {
        handleInput(name, {
            value: value.replace(/\s{2,}/g, " ").trim(),
            errors: [],
        });
        if (required && isEmpty(value)) {
            handleInput(name, { value, errors: ["INPUT_REQUIRED"] });
        }
    };

    const generateIcon = () => {
        if (icon) {
            switch (name) {
                case "currentMessage":
                    return (
                        <div className="d-flex align-items-center">
                            <span onClick={handleSend}>
                                <SendArrow
                                    width={20}
                                    className="mr-20 iconTextArea pointer"
                                />
                            </span>
                        </div>
                    );

                default:
                    break;
            }
        }
    };

    return (
        <div className="textAreaComponent inputComponent">
            <div
                className={`inputWrapper textArea ${value ? "hasText" : ""} ${
                    className ? className : ""
                }`}
            >
                {" "}
                <label className={`${labelClass ? labelClass : ""}`}>
                    {Translate(label)}
                </label>
                <textarea
                    placeholder={placeholder || ""}
                    value={value}
                    onChange={(e) => {
                        handleCounter(e.target.value.length);
                        handleInput(name, {
                            value: e.target.value,
                            errors: [],
                        });
                    }}
                    onBlur={validateInput}
                    className="p-10 d-flex flex-column non-resizable w-100perc"
                    disabled={disabled}
                />
                {
                    generateIcon()
                }
                {errors?.map((e, i) => (
                    <span
                        className="error f-s-13 is-warning danger mt-5"
                        key={i}
                    >
                        {Translate(e)}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default _cta;
