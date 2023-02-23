import React from "react";
import { Theme } from "../../shared/theme";
import { Typography } from "../typography";
import { Container } from "./styles/container";
import { StyledTooltip } from "./styles/tooltip";
import { Positions } from "./types";
export var Tooltip = function (_a) {
    var position = _a.position, _b = _a.theme, theme = _b === void 0 ? Theme : _b, content = _a.content, children = _a.children, title = _a.title, _c = _a.variant, variant = _c === void 0 ? "standard" : _c, arrow = _a.arrow, style = _a.style;
    var tooltipPosition = Positions[position] || "bottom";
    return (React.createElement(Container, { position: tooltipPosition },
        children,
        React.createElement(StyledTooltip, { style: style, arrow: arrow, content: content, variant: variant, theme: theme, position: tooltipPosition, title: title },
            title && React.createElement(Typography, { content: title, variant: "h6" }),
            React.createElement(Typography, { content: content, variant: "bodyMedium" }))));
};
//# sourceMappingURL=index.js.map