import React from "react";
import { ButtonVariants, ButtonSizes } from "../types";
import { DefaultTheme } from "../../../types";
export declare const ButtonContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    disabled: boolean;
    variant: ButtonVariants | string;
    size: ButtonSizes | string;
    theme: DefaultTheme;
    customStyle: React.CSSProperties | undefined;
}, never>;
