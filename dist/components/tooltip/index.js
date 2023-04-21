import React from "react";
import { Theme } from "../../shared/theme";
import { Typography } from "../typography";
import { Container } from "./styles/container";
import { StyledTooltip } from "./styles/tooltip";
import { TooltipPositions } from "./types";
export const Tooltip = ({ position, theme = Theme, content, children, title, variant = "standard", arrow, style, }) => {
    const tooltipPosition = TooltipPositions[position] || "bottom";
    return (React.createElement("div", null,
        React.createElement(Container, { position: tooltipPosition }, children),
        React.createElement(StyledTooltip, { style: style, arrow: arrow, content: content, variant: variant, theme: theme, position: tooltipPosition, title: title },
            title && React.createElement(Typography, { content: title, variant: "h6" }),
            React.createElement(Typography, { content: content, variant: "bodyMedium" }))));
};
//# sourceMappingURL=index.js.map