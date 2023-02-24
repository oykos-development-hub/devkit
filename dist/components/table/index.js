import React from "react";
import { Theme } from "../../shared/theme";
import { Container } from "./styles/container";
import { NoDataElement } from "./styles/noDataElement";
import { StyledTable } from "./styles/table";
export var Table = function (_a) {
    var _b = _a.theme, theme = _b === void 0 ? Theme : _b, style = _a.style, headerContent = _a.headerContent, bodyContent = _a.bodyContent, titleElement = _a.titleElement, noDataMessage = _a.noDataMessage;
    return (React.createElement(Container, { theme: theme },
        titleElement && titleElement,
        React.createElement(StyledTable, { theme: theme, style: style },
            React.createElement("thead", null, headerContent && headerContent),
            React.createElement("tbody", null, bodyContent && bodyContent)),
        !bodyContent && noDataMessage && React.createElement(NoDataElement, null, noDataMessage)));
};
//# sourceMappingURL=index.js.map