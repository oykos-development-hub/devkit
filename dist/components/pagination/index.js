import React, { useMemo } from "react";
import { Theme } from "../../shared/theme";
import { StyledPagination } from "./styles/customStyledPagination";
export const SSSPagination = (props) => {
    const mergedProps = useMemo(() => (Object.assign(Object.assign({}, props), { theme: Theme, previousLabel: "Prethodna", nextLabel: "Sljedeća" })), [props]);
    return React.createElement(StyledPagination, Object.assign({}, mergedProps));
};
//# sourceMappingURL=index.js.map