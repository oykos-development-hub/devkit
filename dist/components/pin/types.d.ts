import { InputHTMLAttributes } from "react";
export interface IPinCode extends InputHTMLAttributes<HTMLInputElement> {
    handleInput: (value: string) => void;
    type?: "numeric" | "password";
    variant: "standard" | "outlined";
    length?: number;
}
