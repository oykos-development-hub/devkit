import React from "react";
import { isEmpty } from "../CustomInput/inputValidations/InputValidations";
import Translate from "../../../functions/utilFunctions/translate";
import { useFormContext } from "../CustomForm/CustomForm";

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
    placeholder?: string;
}

const _cta: React.FC<ICustomInput> = ({
    value,
    label,
    placeholder,
    handleInput,
    name,
    className,
    required,
    errors,
}: ICustomInput) => {
    const isForm = useFormContext();
    if (!isForm) {
        throw Error(
            "You can't use CustomTextArea outside of CustomForm component!"
        );
    }

    const handleCounter = (val) => {
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

    return (
        <div className="textAreaComponent inputComponent">
            <div
                className={`inputWrapper textArea ${value ? "hasText" : ""} ${
                    className ? className : ""
                }`}
            >
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
                />
                <label>
                    <Translate text={label} />
                </label>
                <span className="count f-s-10 px-5">
                    Broj karaktera: <b id={`${name}`}>{0}</b>
                </span>
            </div>
            {errors?.map((e, i) => (
                <span className="error f-s-16 is-warning danger" key={i}>
                    <Translate text={e} />
                </span>
            ))}
        </div>
    );
};

export default _cta;
