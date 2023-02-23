import styled, { css } from "styled-components";
import { BodyMedium } from "../../typography/styles/variants";
import { TooltipProps, Positions, Variants } from "../types";

// tooltip positions
const TooltipPositions = {
  top: css`
    & #tooltip-content {
      left: 50%;
      bottom: 100%;
      transform: translate(-50%, -0.75em);
    }
  `,
  topLeft: css`
    & #tooltip-content {
      right: 100%;
      bottom: 100%;
      transform: translate(1.5em, -0.75em);
    }
  `,
  topRight: css`
    & #tooltip-content {
      left: 100%;
      bottom: 100%;
      transform: translate(-1.5em, -0.75em);
    }
  `,
  left: css`
    & #tooltip-content {
      top: 50%;
      right: 100%;
      transform: translate(-0.75em, -50%);
    }
  `,
  bottom: css`
    & #tooltip-content {
      top: 100%;
      left: 50%;
      transform: translate(-50%, 0.75em);
    }
  `,
  right: css`
    & #tooltip-content {
      top: 50%;
      left: 100%;
      transform: translate(0.75em, -50%);
    }
  `,
};

// arrow styles & arrow positions
const sharedArrowStyles = css`
  content: "";
  position: absolute;
  width: 0.75em;
  height: 0.75em;
  border-radius: 1px;
`;

const ArrowPositions = {
  top: css`
    #tooltip-content::after {
      ${sharedArrowStyles}
      top: calc(100% - 0.5em);
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  `,
  topLeft: css`
    #tooltip-content::after {
      ${sharedArrowStyles}
      top: calc(100% - 0.5em);
      left: 100%;
      transform: translateX(-1.75em) rotate(45deg);
    }
  `,
  topRight: css`
    #tooltip-content::after {
      ${sharedArrowStyles}
      top:calc(100% - 0.5em);
      right: 100%;
      transform: translateX(1.75em) rotate(45deg);
    }
  `,
  left: css`
    #tooltip-content::after {
      ${sharedArrowStyles}
      top: 50%;
      left: calc(100% - 0.5em);
      transform: translateY(-50%) rotate(45deg);
    }
  `,
  bottom: css`
    #tooltip-content::after {
      ${sharedArrowStyles}
      left: 50%;
      bottom: calc(100% - 0.5em);
      transform: translateX(-50%) rotate(45deg);
    }
  `,
  right: css`
    #tooltip-content::after {
      ${sharedArrowStyles}
      top: 50%;
      right: calc(100% - 0.5em);
      transform: translateY(-50%) rotate(45deg);
    }
  `,
};

// styles based on current position
const tooltipPosition = (position: keyof typeof Positions) => TooltipPositions[Positions[position]];

const arrowPosition = (position: keyof typeof Positions, arrow?: boolean) =>
  arrow ? ArrowPositions[Positions[position]] : null;

// tooltip
export const StyledTooltip = styled.div<TooltipProps>(({ style, position, arrow, variant, theme }) => {
  return css`
    position: relative;

    #tooltip-content {
      min-width: 100%;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      gap: 0.25em;
      visibility: hidden;
      color: ${variant === Variants["standard"] ? theme.palette.gray900 : theme.palette.white};
      background-color: ${variant === Variants["standard"] ? theme.palette.white : theme.palette.primary500};
      border-radius: 0.5em;
      white-space: nowrap;
      z-index: 1;
      padding: 0.5em 0.75em;
      position: absolute;
      box-shadow: 0px 8px 14px 3px rgba(0, 0, 0, 0.1);
    }

    #tooltip-content::after {
      background-color: ${style?.backgroundColor ||
      (variant === Variants["standard"] ? theme.palette.white : theme.palette.primary500)};
    }

    &:hover #tooltip-content {
      visibility: visible;
    }

    & ${BodyMedium} {
      font-size: 14px;
      color: ${style?.color || (variant === Variants["standard"] ? theme.palette.gray900 : theme.palette.white)};
      white-space: pre-line;
    }

    ${tooltipPosition(position)}
    ${arrowPosition(position, arrow)}

    ${{ ...style }}
  `;
});
