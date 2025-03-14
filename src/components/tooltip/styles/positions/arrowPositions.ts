import { css } from "styled-components";
import { TooltipPositions } from "../../types";

const sharedArrowStyles = css`
  content: "";
  position: absolute;
  width: 0.75em;
  height: 0.75em;
  border-radius: 1px;
`;

const ArrowPositions = {
  top: css`
    &::after {
      ${sharedArrowStyles}
      top: calc(100% - 0.5em);
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  `,
  topLeft: css`
    &::after {
      ${sharedArrowStyles}
      top: calc(100% - 0.5em);
      left: 100%;
      transform: translateX(-1.75em) rotate(45deg);
    }
  `,
  topRight: css`
    &::after {
      ${sharedArrowStyles}
      top:calc(100% - 0.5em);
      right: 100%;
      transform: translateX(1.75em) rotate(45deg);
    }
  `,
  left: css`
    &::after {
      ${sharedArrowStyles}
      top: 50%;
      left: calc(100% - 0.5em);
      transform: translateY(-50%) rotate(45deg);
    }
  `,
  bottom: css`
    &::after {
      ${sharedArrowStyles}
      left: 50%;
      bottom: calc(100% - 0.5em);
      transform: translateX(-50%) rotate(45deg);
    }
  `,
  right: css`
    &::after {
      ${sharedArrowStyles}
      top: 50%;
      right: calc(100% - 0.5em);
      transform: translateY(-50%) rotate(45deg);
    }
  `,
};

// styles based on current position
export const arrowPosition = (position: TooltipPositions | `${TooltipPositions}`, arrow?: boolean) =>
  arrow ? ArrowPositions[TooltipPositions[position]] : null;
