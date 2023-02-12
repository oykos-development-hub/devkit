import React from "react";
import { RadioSize } from "../types";
import { DefaultTheme } from "../../../shared/theme/types";
export declare const Icon: import("styled-components").StyledComponent<"svg", import("styled-components").DefaultTheme, {
    children: React.ReactNode;
}, never>;
export declare const Circle: import("styled-components").StyledComponent<"circle", import("styled-components").DefaultTheme, {
    cx: 12;
    cy: 12;
    r: 5;
} & {
    disabled: boolean;
    style: React.CSSProperties | undefined;
    theme: DefaultTheme;
}, "cx" | "cy" | "r">;
export declare const HiddenRadio: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {
    type: "radio";
}, "type">;
export declare const Content: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    checked: boolean;
    disabled: boolean;
    size: RadioSize;
    theme: DefaultTheme;
    style: React.CSSProperties | undefined;
}, never>;
