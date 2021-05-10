import React from "react";
import { CheckmarkIcon } from "../../../components/Icons/Icons";

interface ICheckbox {
    name: string;
    checked: boolean;
    handleChange: (checked, index) => void;
    index?: number;
}

const _ccb = ({ checked, handleChange, name, index }: ICheckbox) => {
    return (
        <div className="checkboxWrapper">
            <input
                id={`${name}${index ? `-${index}` : ""}`}
                type="checkbox"
                checked={checked}
                onChange={(e) => handleChange(e.currentTarget.checked, index)}
            />
            <label
                htmlFor={`${name}${index ? `-${index}` : ""}`}
                className="checkBox br-r-4 d-flex justify-content-center align-items-center"
            >
                <CheckmarkIcon width={20} />
            </label>
        </div>
    );
};

export default _ccb;
