var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { useState } from "react";
import ReactPaginate from "./react-paginate";
import { Theme } from "../../shared/theme";
import { Typography } from "../typography";
import { Container } from "./style/container";
export const Pagination = (_a) => {
    var { previousLabel, nextLabel, renderPaginationText, onChange, theme = Theme, variant = "filled", style, displayPages = true, pageRangeDisplayed = 3, marginPagesDisplayed = 3, fullWidth = true, pageCount } = _a, rest = __rest(_a, ["previousLabel", "nextLabel", "renderPaginationText", "onChange", "theme", "variant", "style", "displayPages", "pageRangeDisplayed", "marginPagesDisplayed", "fullWidth", "pageCount"]);
    const [selectedPage, setSelectedPage] = useState(0);
    const handlePageClick = ({ selected }) => {
        setSelectedPage(selected);
        onChange(selected);
    };
    return (React.createElement(Container, { style: style, theme: theme, variant: variant, displayPages: displayPages, renderPaginationText: renderPaginationText, fullWidth: fullWidth },
        React.createElement(ReactPaginate, Object.assign({ activeClassName: "active", disabledClassName: "disabled", breakLabel: "...", onPageChange: handlePageClick, pageCount: pageCount, nextLabel: nextLabel, previousLabel: previousLabel, pageRangeDisplayed: pageRangeDisplayed, marginPagesDisplayed: marginPagesDisplayed }, rest)),
        React.createElement(Typography, { content: renderPaginationText && renderPaginationText(selectedPage + 1, pageCount), variant: "bodyMedium" })));
};
//# sourceMappingURL=index.js.map