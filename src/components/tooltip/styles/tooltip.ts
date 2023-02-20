import styled, { css, DefaultTheme } from "styled-components";
import { BodyMedium, H6 } from "../../typography/styles/variants";
import { TooltipProps, Positions, Variants } from "../types";

// colors
const backgroundColor = (variant: keyof typeof Variants, theme: DefaultTheme) =>
  variant === "standard" ? theme.palette.white : theme.palette.primary500;

const color = (variant: keyof typeof Variants, theme: DefaultTheme) =>
  variant === "standard" ? theme.palette.gray900 : theme.palette.white;

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
  border: 6px solid;
`;

const ArrowPositions = {
  top: css`
    #tooltip-content::after {
      ${sharedArrowStyles}
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-color: ${({ variant, theme }: TooltipProps) =>
        `${backgroundColor(variant, theme)} transparent transparent transparent`};
    }
  `,
  topLeft: css`
    #tooltip-content::after {
      ${sharedArrowStyles}
      top: 100%;
      left: 100%;
      transform: translateX(-1.5em);
      border-color: ${({ variant, theme }: TooltipProps) =>
        `${backgroundColor(variant, theme)} transparent transparent transparent`};
    }
  `,
  topRight: css`
    #tooltip-content::after {
      ${sharedArrowStyles}
      top: 100%;
      right: 100%;
      transform: translateX(1.5em);
      border-color: ${({ variant, theme }: TooltipProps) =>
        `${backgroundColor(variant, theme)} transparent transparent transparent`};
    }
  `,
  left: css`
    #tooltip-content::after {
      ${sharedArrowStyles}
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      border-color: ${({ variant, theme }: TooltipProps) =>
        `transparent transparent transparent ${backgroundColor(variant, theme)}`};
    }
  `,
  bottom: css`
    #tooltip-content::after {
      ${sharedArrowStyles}
      left: 50%;
      bottom: 100%;
      transform: translateX(-50%);
      border-color: ${({ variant, theme }: TooltipProps) =>
        `transparent transparent ${backgroundColor(variant, theme)} transparent`};
    }
  `,
  right: css`
    #tooltip-content::after {
      ${sharedArrowStyles}
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      border-color: ${({ variant, theme }: TooltipProps) =>
        `transparent ${backgroundColor(variant, theme)} transparent transparent`};
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
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      visibility: hidden;
      background-color: ${backgroundColor(variant, theme)};
      border-radius: 0.5em;
      white-space: nowrap;
      z-index: 1;
      padding: 0.5em 0.75em;
      position: absolute;
      box-shadow: 0px 8px 14px 3px rgba(0, 0, 0, 0.1);
      & ${BodyMedium} ${H6} {
        color: ${color(variant, theme)};
      }
    }

    &:hover #tooltip-content {
      visibility: visible;
    }

    ${tooltipPosition(position)}
    ${arrowPosition(position, arrow)}

    ${{ ...style }}
  `;
});
