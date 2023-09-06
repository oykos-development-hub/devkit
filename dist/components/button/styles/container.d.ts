import { ButtonVariants, ButtonSizes, ButtonProps } from "../types";
import { DefaultTheme } from "../../../types";
import React from "react";
export declare const ButtonContainer: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, Partial<Pick<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | keyof React.ButtonHTMLAttributes<HTMLButtonElement>> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null | undefined;
} & ButtonProps> & {
    [others: string]: any;
} & {
    disabled: boolean;
    variant: ButtonVariants | string;
    size: ButtonSizes | string;
    theme: DefaultTheme;
    style: React.CSSProperties | undefined;
    loading: boolean;
}, string | number>;
