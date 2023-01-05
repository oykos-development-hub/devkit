import { ReactElement, ReactSVGElement } from "react";
import { DefaultTheme } from "styled-components";
export interface InputProps {
    variant: "standard" | "outlined";
    name?: string;
    label?: string;
    fontSize?: string;
    type?: string;
    placeholder?: string;
    width?: string;
    fullWidth?: boolean;
    height?: string;
    margin?: string;
    borderColor?: string;
    borderRadius?: string;
    error?: boolean;
    errorMessage?: string;
    errorColor?: string;
    disabled?: boolean;
    textarea?: boolean;
    iconLeft?: ReactElement | ReactSVGElement;
    iconRight?: ReactElement | ReactSVGElement;
    theme?: DefaultTheme;
    onChange?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
}
