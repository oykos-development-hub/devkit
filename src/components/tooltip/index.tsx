import React, { useCallback, useState } from "react";
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
  className,
}: TooltipProps) => {
  const [tooltipWidth, setTooltipWidth] = useState(0);
  const tooltipPosition = TooltipPositions[position] || "bottom";

  const tooltipRef = useCallback(
    (node: HTMLDivElement) => {
      if (node !== null) {
        setTooltipWidth(node.offsetWidth);
      }
    },
    [content, title],
  );

  return (
    <Container className={className}>
      <HoverContents tooltipWidth={tooltipWidth} position={tooltipPosition}>
        {children}
      </HoverContents>
      <StyledTooltip
        style={style}
        arrow={arrow}
        content={content}
        variant={variant}
        theme={theme}
        position={tooltipPosition}
        title={title}
        ref={tooltipRef}
      >
        {title && <Typography content={title} variant="h6" />}
        <Typography content={content} variant="bodyMedium" />
      </StyledTooltip>
    </Container>
  );
};
