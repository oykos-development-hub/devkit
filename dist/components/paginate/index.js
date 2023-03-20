import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Theme } from "../../shared/theme";
import { Typography } from "../typography";
import { Container } from "./style/container";
export const Pagination = ({ previousLabel, nextLabel, renderPaginationText, onChange, theme = Theme, variant = "filled", style, displayPages = true, pageRangeDisplayed = 3, marginPagesDisplayed = 3, fullWidth = true, pageCount, }) => {
    const [selectedPage, setSelectedPage] = useState(0);
    const handlePageClick = ({ selected }) => {
        setSelectedPage(selected);
        onChange(selected);
    };
    return (React.createElement(Container, { style: style, theme: theme, variant: variant, displayPages: displayPages, renderPaginationText: renderPaginationText, fullWidth: fullWidth },
        React.createElement(ReactPaginate, { activeClassName: "active", disabledClassName: "disabled", breakLabel: "...", onPageChange: handlePageClick, pageCount: pageCount, nextLabel: nextLabel, previousLabel: previousLabel, pageRangeDisplayed: pageRangeDisplayed, marginPagesDisplayed: marginPagesDisplayed }),
        React.createElement(Typography, { content: renderPaginationText && renderPaginationText(selectedPage + 1, pageCount), variant: "bodyMedium" })));
};
//# sourceMappingURL=index.js.map