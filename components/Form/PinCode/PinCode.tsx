import React from "react";

import { useFormContext } from "../CustomForm/CustomForm";
import Translate from "../../../functions/utilFunctions/translate";

interface IPinCode {
    value: Array<string>;
    handleInput: (value: Array<string>, errors: Array<string>) => void;
    errors?: Array<string>;
    className?: string;
}

const _pc: React.FC<IPinCode> = ({
    value,
    handleInput,
    errors,
    className,
}: IPinCode) => {
    const isForm = useFormContext();
    if (!isForm) {
        throw Error("You can't use PinCode outside of CustomForm component!");
    }

    const validateInput = () => {};

    const pinRefs = {};

    value.forEach((e, i) => {
        pinRefs[`pinRef-${i}`] = React.createRef();
    });

    const handleOnChange = (val, index) => {
        const re = /^(\d*\.)?\d+$/;
        if (re.test(val)) {
            const newArray = value.map((e, i) => (i !== index ? e : val));
            handleInput(newArray, []);
            if (index + 1 < value.length) {
                pinRefs[`pinRef-${index + 1}`].current.focus();
                clearInput(newArray, index + 1);
            }
        }
    };

    const clearInput = (oldArray, index) => {
        const newArray = oldArray.map((e, i) => (i !== index ? e : ""));
        handleInput(newArray, []);
    };

    return (
        <div className="inputComponent">
            <div className={`inputWrapper  ${value ? "hasText" : ""}`}>
                {value.map((e, i) => (
                    <input
                        className={`f-s-16 pinInput ${
                            className ? className : ""
                        }`}
                        id={`${i}`}
                        key={i}
                        value={e}
                        onChange={(e) => handleOnChange(e.target.value, i)}
                        onBlur={validateInput}
                        type="password"
                        maxLength={1}
                        onClick={() => clearInput(value, i)}
                        ref={pinRefs[`pinRef-${i}`]}
                    />
                ))}
            </div>
            {errors?.map((e, i) => (
                <span className="error f-s-16 is-warning danger" key={i}>
                    <Translate text={e} />
                </span>
            ))}
        </div>
    );
};

export default _pc;
