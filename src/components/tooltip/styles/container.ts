import styled, { css } from "styled-components";
import { TooltipPositions } from "../types";
import { tooltipPosition } from "./positions/tooltipPositions";

export const Container = styled.div<{ position: TooltipPositions | `${TooltipPositions}` }>(({ position }) => {
  return css`
    position: relative;

    &:hover > div {
      visibility: visible;
    }

    ${tooltipPosition(position)}
  `;
});
