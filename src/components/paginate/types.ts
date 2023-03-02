import { ReactElement } from "react";
import { CSSProperties, DefaultTheme } from "styled-components";

export enum PaginationVariants {
  filled = "filled",
  outlined = "outlined",
  underlined = "underlined",
  dotted = "dotted",
}

export interface PaginationProps {
  theme: DefaultTheme;
  variant: keyof typeof PaginationVariants;
  style?: CSSProperties;
  fullWidth?: boolean;

  data: any;
  renderContent: (data: any) => JSX.Element | JSX.Element[];
  renderPaginationText?: (selected: number, total: number) => string;
  itemsPerPage: number;
  previousLabel: string | ReactElement;
  nextLabel: string | ReactElement;
  pageRangeDisplayed: number;
  marginPagesDisplayed?: number;
  displayPages?: boolean;
}
