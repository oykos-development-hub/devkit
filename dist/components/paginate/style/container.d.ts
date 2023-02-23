import { CSSProperties, DefaultTheme } from "styled-components";
import { Positions, Variants } from "../types";
export declare const Container: import("styled-components").StyledComponent<"div", DefaultTheme, {
    displayPages?: boolean | undefined;
    theme: DefaultTheme;
    style?: CSSProperties | undefined;
    variant: keyof typeof Variants;
    position: keyof typeof Positions;
    renderPaginationText?: ((selected: number, total: number) => string) | undefined;
}, never>;
