import React from "react";
import { Theme } from "../../shared/theme";
import { Typography } from "../typography";
import { HoverContents } from "./styles/hoverContents";
import { StyledTooltip } from "./styles/tooltip";
import { TooltipPositions, TooltipProps } from "./types";
import { Container } from "./styles/container";

export const Tooltip = ({
  position,
  theme = Theme,
  content,
  children,
  title,
  variant = "standard",
  arrow,
  style,
}: TooltipProps) => {
  const tooltipPosition = TooltipPositions[position] || "bottom";
  return (
    <Container>
      <HoverContents position={tooltipPosition}>{children}</HoverContents>
      <StyledTooltip
        style={style}
        arrow={arrow}
        content={content}
        variant={variant}
        theme={theme}
        position={tooltipPosition}
        title={title}
      >
        {title && <Typography content={title} variant="h6" />}
        <Typography content={content} variant="bodyMedium" />
      </StyledTooltip>
    </Container>
  );
};
