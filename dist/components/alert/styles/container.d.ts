import React from "react";
import { DefaultTheme } from "styled-components";
import { AlertSizes, AlertVariants } from "../types";
export declare const Container: import("styled-components").StyledComponent<"div", DefaultTheme, {
    variant: AlertVariants;
    size: AlertSizes | keyof typeof AlertSizes;
    theme: DefaultTheme;
    style: React.CSSProperties | undefined;
}, never>;
