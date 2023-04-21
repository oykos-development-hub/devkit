import { css } from "styled-components";
import { TooltipPositions } from "../../types";
import { StyledTooltip } from "../tooltip";
const Positions = {
    top: css `
    & + ${StyledTooltip} {
      left: 50%;
      bottom: 100%;
      transform: translate(-50%, 1em);
    }
  `,
    topLeft: css `
    & + ${StyledTooltip} {
      right: 100%;
      bottom: 100%;
      transform: translate(1.5em, 1em);
    }
  `,
    topRight: css `
    & + ${StyledTooltip} {
      left: 100%;
      bottom: 100%;
      transform: translate(-1.5em, 1em);
    }
  `,
    left: css `
    & + ${StyledTooltip} {
      top: 50%;
      right: 100%;
      transform: translate(1em, -50%);
    }
  `,
    bottom: css `
    & + ${StyledTooltip} {
      top: 50%;
      left: 50%;
      transform: translate(-50%, 1em);
    }
  `,
    right: css `
    & + ${StyledTooltip} {
      top: 50%;
      left: 100%;
      transform: translate(1em, -50%);
    }
  `,
};
export const tooltipPosition = (position) => Positions[TooltipPositions[position]];
//# sourceMappingURL=tooltipPositions.js.map