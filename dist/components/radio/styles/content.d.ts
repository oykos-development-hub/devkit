import React from "react";
import { RadioSize } from "../types";
import { DefaultTheme } from "../../../shared/theme/types";
export declare const HiddenRadio: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {
    type: "radio";
}, "type">;
export declare const Content: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    checked: boolean;
    disabled: boolean;
    size: RadioSize | `${RadioSize}`;
    theme: DefaultTheme;
    style: React.CSSProperties | undefined;
}, never>;
