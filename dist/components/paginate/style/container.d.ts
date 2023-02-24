import { CSSProperties, DefaultTheme } from "styled-components";
import { Variants } from "../types";
export declare const Container: import("styled-components").StyledComponent<"div", DefaultTheme, {
    displayPages?: boolean | undefined;
    theme: DefaultTheme;
    style?: CSSProperties | undefined;
    variant: keyof typeof Variants;
    fullWidth?: boolean | undefined;
    renderPaginationText?: ((selected: number, total: number) => string) | undefined;
}, never>;
