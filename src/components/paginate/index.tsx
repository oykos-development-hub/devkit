import React, { FC } from "react";
import { useState } from "react";
import ReactPaginate from "./react-paginate";
import { Theme } from "../../shared/theme";
import { Typography } from "../typography";
import { Container } from "./style/container";
import { PaginationProps } from "./types";

export const Pagination: FC<PaginationProps> = ({
  previousLabel,
  nextLabel,
  renderPaginationText,
  onChange,
  theme = Theme,
  variant = "filled",
  style,
  displayPages = true,
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 3,
  fullWidth = true,
  pageCount,
  className,
  ...rest
}) => {
  const [selectedPage, setSelectedPage] = useState(0);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setSelectedPage(selected);
    onChange(selected);
  };

  return (
    <Container
      style={style}
      theme={theme}
      variant={variant}
      displayPages={displayPages}
      renderPaginationText={renderPaginationText}
      fullWidth={fullWidth}
      className={className}
    >
      <ReactPaginate
        activeClassName="active"
        disabledClassName="disabled"
        breakLabel="..."
        onPageChange={handlePageClick}
        pageCount={pageCount}
        nextLabel={nextLabel}
        previousLabel={previousLabel}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
        {...rest}
      ></ReactPaginate>

      <Typography
        content={renderPaginationText && renderPaginationText(selectedPage + 1, pageCount)}
        variant="bodyMedium"
      />
    </Container>
  );
};
