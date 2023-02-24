import { ReactElement } from "react";
import { CSSProperties, DefaultTheme } from "styled-components";
export declare enum Variants {
    filled = "filled",
    outlined = "outlined",
    underlined = "underlined"
}
export interface PaginationProps {
    theme: DefaultTheme;
    variant: keyof typeof Variants;
    style?: CSSProperties;
    fullWidth?: boolean;
    data: any;
    renderContent: (data: any) => JSX.Element | JSX.Element[];
    renderPaginationText?: (selected: number, total: number) => string;
    itemsPerPage: number;
    previousLabel: string | ReactElement;
    nextLabel: string | ReactElement;
    pageRangeDisplayed: number;
    displayPages?: boolean;
}
