import { DefaultTheme } from "styled-components";
import { LeadingBadgeSizes, LeadingBadgeTheme, LeadingBadgeVariants } from "../types";
import React from "react";
export declare const Container: import("styled-components").StyledComponent<"div", DefaultTheme, {
    variant: LeadingBadgeVariants | string;
    size: LeadingBadgeSizes | string;
    style?: React.CSSProperties | undefined;
    leadingBadgeTheme: LeadingBadgeTheme | string;
    theme?: DefaultTheme | undefined;
}, never>;
