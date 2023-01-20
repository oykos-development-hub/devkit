import { InputHTMLAttributes } from "react";
import { InputTypes } from "../input/types";
export interface IPinCode extends InputHTMLAttributes<HTMLInputElement> {
    handleInput: (value: string) => void;
    type?: InputTypes;
    variant: "standard" | "outlined";
    length?: number;
}
