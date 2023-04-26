import React, { useCallback, useState } from "react";
import { Theme } from "../../shared/theme";
import { Typography } from "../typography";
import { HoverContents } from "./styles/hoverContents";
import { StyledTooltip } from "./styles/tooltip";
import { TooltipPositions } from "./types";
import { Container } from "./styles/container";
export const Tooltip = ({ position, theme = Theme, content, children, title, variant = "standard", arrow, style, }) => {
    const [tooltipWidth, setTooltipWidth] = useState(0);
    const tooltipPosition = TooltipPositions[position] || "bottom";
    const tooltipRef = useCallback((node) => {
        if (node !== null) {
            setTooltipWidth(node.offsetWidth);
        }
    }, []);
    return (React.createElement(Container, null,
        React.createElement(HoverContents, { tooltipWidth: tooltipWidth, position: tooltipPosition }, children),
        React.createElement(StyledTooltip, { style: style, arrow: arrow, content: content, variant: variant, theme: theme, position: tooltipPosition, title: title, ref: tooltipRef },
            title && React.createElement(Typography, { content: title, variant: "h6" }),
            React.createElement(Typography, { content: content, variant: "bodyMedium" }))));
};
//# sourceMappingURL=index.js.map