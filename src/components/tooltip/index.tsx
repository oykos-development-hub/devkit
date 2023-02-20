import React from "react";
import { Theme } from "../../shared/theme";
import { Typography } from "../typography";
import { StyledTooltip } from "./styles/tooltip";
import { Positions, TooltipProps } from "./types";

const Tooltip: React.FC<TooltipProps> = ({
  position,
  theme = Theme,
  content,
  children,
  title,
  variant = "standard",
  arrow,
  style,
}) => {
  const tooltipPosition = Positions[position] || "bottom";

  return (
    <StyledTooltip arrow={arrow} position={tooltipPosition} content={content} variant={variant} theme={theme}>
      {children}

      <div id="tooltip-content" style={style}>
        {title && <Typography content={title} variant="h6" />}
        <Typography content={content} variant="bodyMedium" />
      </div>
    </StyledTooltip>
  );
};

export default Tooltip;
