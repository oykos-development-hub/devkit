import styled, { css } from "styled-components";
import { tooltipPosition } from "./positions/tooltipPositions";
export const Container = styled.div(({ position }) => {
    return css `
    position: relative;

    &:hover > div {
      visibility: visible;
    }

    ${tooltipPosition(position)}
  `;
});
//# sourceMappingURL=container.js.map