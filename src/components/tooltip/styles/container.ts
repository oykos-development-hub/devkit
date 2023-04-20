import styled, { css } from "styled-components";
import { TooltipPositions } from "../types";
import { tooltipPosition } from "./positions/tooltipPositions";
import { StyledTooltip } from "./tooltip";

export const Container = styled.div<{ position: TooltipPositions | `${TooltipPositions}` }>(({ position }) => {
  return css`
    position: relative;

    &:hover + ${StyledTooltip} {
      visibility: visible;
    }

    ${tooltipPosition(position)}
  `;
});
