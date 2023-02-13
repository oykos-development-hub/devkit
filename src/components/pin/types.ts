import { InputHTMLAttributes } from "react";

export interface IPinCode extends InputHTMLAttributes<HTMLInputElement> {
  handleInput: (value: string) => void;
  type?: "numeric" | "password";
  length?: number;
}
