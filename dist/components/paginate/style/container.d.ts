import { CSSProperties, DefaultTheme } from "styled-components";
import { PaginationVariants } from "../types";
export declare const Container: import("styled-components").StyledComponent<"div", DefaultTheme, {
    displayPages?: boolean | undefined;
    theme: DefaultTheme;
    style?: CSSProperties | undefined;
    variant: PaginationVariants | string;
    fullWidth?: boolean | undefined;
    renderPaginationText?: ((selected: number, total: number) => string) | undefined;
}, never>;
