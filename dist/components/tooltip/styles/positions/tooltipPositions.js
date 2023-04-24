import { css } from "styled-components";
import { TooltipPositions } from "../../types";
import { StyledTooltip } from "../tooltip";
const Positions = {
    bottom: css `
    & + ${StyledTooltip} {
      top: 50%;
      left: 50%;
      transform: translate(-50%, 1em);
    }
  `,
    top: css `
    & + ${StyledTooltip} {
      left: 50%;
      bottom: 50%;
      transform: translate(-50%, -1em);
    }
  `,
    topLeft: css `
    & + ${StyledTooltip} {
      right: 50%;
      bottom: 50%;
      transform: translate(calc(-50% - 2em), -1em);
    }
  `,
    topRight: css `
    & + ${StyledTooltip} {
      left: 50%;
      bottom: 50%;
      transform: translate(calc(50% + 2em), -1em);
    }
  `,
    left: css `
    & + ${StyledTooltip} {
      top: 50%;
      left: calc(-50% - 1em);
      transform: translate(-50%, -50%);
    }
  `,
    right: css `
    & + ${StyledTooltip} {
      top: 50%;
      right: calc(-50% - 1em);
      transform: translate(50%, -50%);
    }
  `,
};
export const tooltipPosition = (position) => {
    return Positions[TooltipPositions[position]];
};
//# sourceMappingURL=tooltipPositions.js.map