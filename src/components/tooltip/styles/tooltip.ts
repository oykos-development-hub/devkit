import styled, { css } from "styled-components";
import { BodyMedium, H6 } from "../../typography/styles/variants";
import { TooltipProps, TooltipVariants } from "../types";
import { arrowPosition } from "./positions/arrowPositions";

export const StyledTooltip = styled.div<TooltipProps>(({ style, position, arrow, variant, theme, title }) => {
  const { white, primary500, gray900 } = theme.palette;

  return css`
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: ${title ? "flex-start" : "center"};
    gap: 0.25em;
    visibility: hidden;
    color: ${variant === TooltipVariants["standard"] ? gray900 : white};
    background-color: ${variant === TooltipVariants["standard"] ? white : primary500};
    border-radius: 0.5em;
    white-space: nowrap;
    z-index: 1;
    padding: 0.5em 0.75em;
    position: absolute;
    box-shadow: 0 8px 14px 3px rgba(0, 0, 0, 0.1);

    &::after {
      background-color: ${style?.backgroundColor || (variant === TooltipVariants["standard"] ? white : primary500)};
    }

    & ${BodyMedium}, ${H6} {
      color: ${style?.color || (variant === TooltipVariants["standard"] ? gray900 : white)};
      white-space: normal;
      font-family: ${style?.fontFamily || theme.fontFamily.one};
    }

    ${arrowPosition(position, arrow)}

    ${{ ...style }}
  `;
});
