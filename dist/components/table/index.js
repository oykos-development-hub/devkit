import React from "react";
import { Theme } from "../../shared/theme";
import { Container } from "./styles/container";
import { NoDataElement } from "./styles/noDataElement";
import { StyledTable } from "./styles/table";
export const Table = ({ theme = Theme, style, headerContent, bodyContent, titleElement, noDataMessage, }) => {
    return (React.createElement(Container, { theme: theme },
        titleElement && titleElement,
        React.createElement(StyledTable, { theme: theme, style: style },
            React.createElement("thead", null, headerContent && headerContent),
            React.createElement("tbody", null, bodyContent && bodyContent)),
        !bodyContent && noDataMessage && React.createElement(NoDataElement, null, noDataMessage)));
};
//# sourceMappingURL=index.js.map