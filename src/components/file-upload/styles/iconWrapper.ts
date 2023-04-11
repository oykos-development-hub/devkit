import styled, { css } from "styled-components";
import { rem } from "polished";

export const IconWrapper = styled.div<{
  customIcon: boolean;
}>(({ customIcon }) => {
  return css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;

    ${!customIcon &&
    `& svg {
       width: ${rem("52px")};
       height: ${rem("52px")};
      
      & path {      
        stroke: #212121;
        stroke-width: 1;
      }
    `}
  `;
});
