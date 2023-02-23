import React from "react";
import { Theme } from "../../shared/theme";
import { Typography } from "../typography";
import { Container } from "./styles/container";
import { StyledTooltip } from "./styles/tooltip";
import { Positions, TooltipProps } from "./types";

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
  const tooltipPosition = Positions[position] || "bottom";

  return (
    <Container position={tooltipPosition}>
      {children}

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
