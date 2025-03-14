import { CSSProperties } from "react";
import { DefaultTheme } from "styled-components";
import { FileUploadVariants } from "../types";
export declare const Container: import("styled-components").StyledComponent<"div", DefaultTheme, {
    variant: FileUploadVariants | `${FileUploadVariants}`;
    isDragging?: boolean | undefined;
    disabled?: boolean | undefined;
    style?: CSSProperties | undefined;
    theme?: DefaultTheme | undefined;
}, never>;
