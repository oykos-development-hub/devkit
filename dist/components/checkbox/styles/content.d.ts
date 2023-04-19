import React from "react";
import { CheckboxSize } from "../types";
import { DefaultTheme } from "../../../shared/theme/types";
export declare const HiddenCheckbox: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {
    type: "checkbox";
}, "type">;
export declare const Content: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    checked: boolean;
    disabled: boolean;
    size: CheckboxSize | `${CheckboxSize}`;
    theme?: DefaultTheme | undefined;
    style?: React.CSSProperties | undefined;
}, never>;
