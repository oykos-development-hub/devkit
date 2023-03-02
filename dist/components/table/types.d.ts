import { ReactElement } from "react";
import { CSSProperties } from "styled-components";
import { DefaultTheme } from "../..";
export interface TableProps {
    headerContent?: JSX.Element | JSX.Element[];
    bodyContent?: JSX.Element | JSX.Element[];
    titleElement?: ReactElement;
    noDataMessage?: string;
    theme: DefaultTheme;
    style?: CSSProperties;
}
