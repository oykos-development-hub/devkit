import React from "react";
import { Typography } from "../typography";
import { StyledTooltip } from "./styles";
import { Positions, TooltipProps } from "./types";

const Tooltip: React.FC<TooltipProps> = ({ position, content, children, title, ...props }) => {
  const tooltipPosition = Positions[position] || "bottom";

  return (
    <StyledTooltip {...props} position={tooltipPosition} content={content}>
      {children}
      <div id="tooltip-content">
        {title && <Typography content={title} variant="h6" />}
        <Typography content={content} variant="body1" />
      </div>
    </StyledTooltip>
  );
};

export default Tooltip;
