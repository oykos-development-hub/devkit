import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Theme } from "../../shared/theme";
import { Typography } from "../typography";
import { Container } from "./style/container";
import { PaginationProps } from "./types";

export const Pagination = ({
  data,
  itemsPerPage,
  previousLabel,
  nextLabel,
  renderContent,
  renderPaginationText,
  theme = Theme,
  variant = "filled",
  position = "center",
  style,
  displayPages = true,
  pageRangeDisplayed,
}: PaginationProps) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = ({ selected }: { selected: number }) => {
    const newOffset = (selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
    setSelectedPage(selected);
  };

  return (
    <Container
      style={style}
      theme={theme}
      variant={variant}
      position={position}
      displayPages={displayPages}
      renderPaginationText={renderPaginationText}
    >
      <>{currentItems && renderContent(currentItems)}</>

      <ReactPaginate
        breakLabel="..."
        nextLabel={nextLabel}
        onPageChange={handlePageClick}
        pageRangeDisplayed={pageRangeDisplayed}
        pageCount={pageCount}
        previousLabel={previousLabel}
        activeClassName="active"
      ></ReactPaginate>

      <Typography
        content={renderPaginationText && renderPaginationText(selectedPage + 1, pageCount)}
        variant="bodyMedium"
      />
    </Container>
  );
};
