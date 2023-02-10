import React from "react";
import { CheckboxSize } from "../types";
import { DefaultTheme } from "../../../shared/theme/types";
export declare const Icon: import("styled-components").StyledComponent<"svg", import("styled-components").DefaultTheme, {
    disabled: boolean;
    theme: DefaultTheme;
}, never>;
export declare const HiddenCheckbox: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {
    type: "checkbox";
}, "type">;
export declare const Content: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    checked: boolean;
    disabled: boolean;
    size: CheckboxSize;
    theme: DefaultTheme;
    style: React.CSSProperties | undefined;
}, never>;
