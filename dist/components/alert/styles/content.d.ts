import { AlertProps, AlertSizes, AlertVariants } from "../types";
import React from "react";
import { DefaultTheme } from "../../../shared/theme/types";
export declare const Content: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    variant: AlertVariants;
    closeIcon?: boolean | undefined;
    size?: AlertSizes | undefined;
    onClose?: ((e?: React.MouseEvent<any>) => any) | undefined;
    theme?: DefaultTheme | undefined;
    style?: React.CSSProperties | undefined;
}, never>;
export declare const LeftContent: React.FC<AlertProps>;
export declare const RightContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    style?: React.CSSProperties | undefined;
}, never>;
