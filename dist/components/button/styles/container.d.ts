import { ButtonVariants, ButtonSizes } from "../types";
import { DefaultTheme } from "../../../types";
import React from "react";
export declare const Container: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {
    disabled: boolean;
    variant: keyof typeof ButtonVariants;
    size: keyof typeof ButtonSizes;
    theme: DefaultTheme;
    style: React.CSSProperties | undefined;
}, never>;
