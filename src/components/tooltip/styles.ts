import styled, { css } from "styled-components";
import { TooltipProps } from "./types";

// colors
const backgroundColor = (props: TooltipProps) => (props.variant === "standard" ? "white" : "#004FFF");
const color = (props: TooltipProps) => (props.variant === "standard" ? "black" : "white");

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
      border-color: ${backgroundColor} transparent transparent transparent;
    }
  `,
  topLeft: css`
    #tooltip-content::after {
      ${sharedArrowStyles}
      top: 100%;
      left: 100%;
      transform: translateX(-1.5em);
      border-color: ${backgroundColor} transparent transparent transparent;
    }
  `,
  topRight: css`
    #tooltip-content::after {
      ${sharedArrowStyles}
      top: 100%;
      right: 100%;
      transform: translateX(1.5em);
      border-color: ${backgroundColor} transparent transparent transparent;
    }
  `,
  left: css`
    #tooltip-content::after {
      ${sharedArrowStyles}
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      border-color: transparent transparent transparent ${backgroundColor};
    }
  `,
  bottom: css`
    #tooltip-content::after {
      ${sharedArrowStyles}
      left: 50%;
      bottom: 100%;
      transform: translateX(-50%);
      border-color: transparent transparent ${backgroundColor} transparent;
    }
  `,
  right: css`
    #tooltip-content::after {
      ${sharedArrowStyles}
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      border-color: transparent ${backgroundColor} transparent transparent;
    }
  `,
};

// styles based on current position
const tooltipPosition = (props: TooltipProps) => TooltipPositions[props.position];
const arrowPosition = (props: TooltipProps) => (!!props.arrow ? ArrowPositions[props.position] : null);

export const StyledTooltip = styled.div<TooltipProps>`
  position: relative;

  #tooltip-content {
    visibility: hidden;
    background-color: ${backgroundColor};
    border-radius: 0.5em;
    white-space: nowrap;
    z-index: 1;
    text-align: center;
    padding: 0.5em 0.75em;
    position: absolute;
    box-shadow: 0px 8px 14px 3px rgba(0, 0, 0, 0.1);
    & h6,
    & p {
      color: ${color};
    }
  }

  &:hover #tooltip-content {
    visibility: visible;
  }

  ${tooltipPosition}
  ${arrowPosition}
`;
