import { css } from "styled-components";
import { TooltipPositions } from "../../types";

const Positions = {
  top: css`
    & > div {
      left: 50%;
      bottom: 100%;
      transform: translate(-50%, -0.75em);
    }
  `,
  topLeft: css`
    & > div {
      right: 100%;
      bottom: 100%;
      transform: translate(1.5em, -0.75em);
    }
  `,
  topRight: css`
    & > div {
      left: 100%;
      bottom: 100%;
      transform: translate(-1.5em, -0.75em);
    }
  `,
  left: css`
    & > div {
      top: 50%;
      right: 100%;
      transform: translate(-0.75em, -50%);
    }
  `,
  bottom: css`
    & > div {
      top: 100%;
      left: 50%;
      transform: translate(-50%, 0.75em);
    }
  `,
  right: css`
    & > div {
      top: 50%;
      left: 100%;
      transform: translate(0.75em, -50%);
    }
  `,
};

// styles based on current position
export const tooltipPosition = (position: TooltipPositions | `${TooltipPositions}`) =>
  Positions[TooltipPositions[position]];
