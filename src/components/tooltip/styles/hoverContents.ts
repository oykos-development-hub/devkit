import styled, { css } from "styled-components";
import { TooltipPositions } from "../types";
import { tooltipPosition } from "./positions/tooltipPositions";
import { StyledTooltip } from "./tooltip";

export const HoverContents = styled.div<{
  position: TooltipPositions | `${TooltipPositions}`;
  tooltipWidth: number;
}>(({ position, tooltipWidth }) => {
  return css`
    position: relative;

    &:hover + ${StyledTooltip} {
      visibility: visible;
    }

    ${tooltipPosition(position, tooltipWidth)}
  `;
});
