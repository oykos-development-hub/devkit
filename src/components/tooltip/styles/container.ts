import styled, { css } from "styled-components";
import { Positions } from "../types";
import { tooltipPosition } from "./positions/tooltipPositions";

export const Container = styled.div<{ position: Positions | `${Positions}` }>(({ position }) => {
  return css`
    position: relative;

    &:hover > div {
      visibility: visible;
    }

    ${tooltipPosition(position)}
  `;
});
