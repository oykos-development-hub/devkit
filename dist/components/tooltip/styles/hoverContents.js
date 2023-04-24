import styled, { css } from "styled-components";
import { tooltipPosition } from "./positions/tooltipPositions";
import { StyledTooltip } from "./tooltip";
export const HoverContents = styled.div(({ position, tooltipWidth }) => {
    return css `
    position: relative;

    &:hover + ${StyledTooltip} {
      visibility: visible;
    }

    ${tooltipPosition(position, tooltipWidth)}
  `;
});
//# sourceMappingURL=hoverContents.js.map