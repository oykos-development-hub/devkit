import { DefaultTheme } from "styled-components";
import { AlertSizes, AlertVariants } from "../types";
export declare const Wrapper: import("styled-components").StyledComponent<"div", DefaultTheme, {
    variant?: AlertVariants | "primary" | "error" | "success" | "info" | undefined;
    size: AlertSizes | `${AlertSizes}`;
    theme?: DefaultTheme | undefined;
}, never>;
