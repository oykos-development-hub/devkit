import { css } from "styled-components";
import { TooltipPositions } from "../../types";
import { StyledTooltip } from "../tooltip";
export const tooltipPosition = (position, tooltipWidth) => {
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
        bottom: 50%;
        left: calc((${tooltipWidth}px * -1) + 2em);
        transform: translateY(-1em);
      }
    `,
        topRight: css `
      & + ${StyledTooltip} {
        bottom: 50%;
        right: calc((${tooltipWidth}px * -1) + 2em);
        transform: translateY(-1em);
      }
    `,
        left: css `
      & + ${StyledTooltip} {
        top: 50%;
        left: calc((${tooltipWidth}px * -1) - 1em);
        transform: translateY(-50%);
      }
    `,
        right: css `
      & + ${StyledTooltip} {
        top: 50%;
        right: calc((${tooltipWidth}px * -1) - 1em);
        transform: translateY(-50%);
      }
    `,
    };
    return Positions[TooltipPositions[position]];
};
//# sourceMappingURL=tooltipPositions.js.map