import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Theme } from "../../shared/theme";
import { Typography } from "../typography";
import { Container } from "./style/container";
export var Pagination = function (_a) {
    var data = _a.data, itemsPerPage = _a.itemsPerPage, previousLabel = _a.previousLabel, nextLabel = _a.nextLabel, renderContent = _a.renderContent, renderPaginationText = _a.renderPaginationText, _b = _a.theme, theme = _b === void 0 ? Theme : _b, _c = _a.variant, variant = _c === void 0 ? "filled" : _c, style = _a.style, _d = _a.displayPages, displayPages = _d === void 0 ? true : _d, pageRangeDisplayed = _a.pageRangeDisplayed, _e = _a.fullWidth, fullWidth = _e === void 0 ? true : _e;
    var _f = useState([]), currentItems = _f[0], setCurrentItems = _f[1];
    var _g = useState(0), pageCount = _g[0], setPageCount = _g[1];
    var _h = useState(0), itemOffset = _h[0], setItemOffset = _h[1];
    var _j = useState(0), selectedPage = _j[0], setSelectedPage = _j[1];
    useEffect(function () {
        var endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);
    var handlePageClick = function (_a) {
        var selected = _a.selected;
        var newOffset = (selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
        setSelectedPage(selected);
    };
    return (React.createElement(Container, { style: style, theme: theme, variant: variant, displayPages: displayPages, renderPaginationText: renderPaginationText, fullWidth: fullWidth },
        React.createElement(React.Fragment, null, currentItems && renderContent(currentItems)),
        React.createElement(ReactPaginate, { breakLabel: "...", nextLabel: nextLabel, onPageChange: handlePageClick, pageRangeDisplayed: pageRangeDisplayed, pageCount: pageCount, previousLabel: previousLabel, activeClassName: "active" }),
        React.createElement(Typography, { content: renderPaginationText && renderPaginationText(selectedPage + 1, pageCount), variant: "bodyMedium" })));
};
//# sourceMappingURL=index.js.map