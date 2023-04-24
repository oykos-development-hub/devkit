import styled, { css } from "styled-components";
import { tooltipPosition } from "./positions/tooltipPositions";
import { StyledTooltip } from "./tooltip";
export const HoverContents = styled.div(({ position }) => {
    return css `
    position: relative;

    &:hover + ${StyledTooltip} {
      visibility: visible;
    }

    ${tooltipPosition(position)}
  `;
});
//# sourceMappingURL=hoverContents.js.map