import { ReactElement } from "react";
import { ReactPaginateProps } from "./react-paginate/types";
import { CSSProperties, DefaultTheme } from "styled-components";

export enum PaginationVariants {
  filled = "filled",
  outlined = "outlined",
  underlined = "underlined",
  dotted = "dotted",
}

export interface PaginationProps extends ReactPaginateProps {
  theme?: DefaultTheme;
  variant: PaginationVariants | `${PaginationVariants}`;
  style?: CSSProperties;
  fullWidth?: boolean;
  pageCount: number;
  renderPaginationText?: (selected: number, total: number) => string;
  onChange: (page: number) => void;
  itemsPerPage: number;
  previousLabel: string | ReactElement;
  nextLabel: string | ReactElement;
  pageRangeDisplayed: number;
  marginPagesDisplayed?: number;
  displayPages?: boolean;
}
