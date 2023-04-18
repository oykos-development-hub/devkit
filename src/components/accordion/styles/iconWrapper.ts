import styled, { css, DefaultTheme } from "styled-components";
import { rem } from "polished";
import { CSSProperties } from "react";

export const IconWrapper = styled.div<{
  isOpen: boolean;
  style?: CSSProperties;
  theme?: DefaultTheme;
}>(({ isOpen, style, theme }) => {
  const { white, gray900 } = theme!.palette;

  return css`
    display: flex;
    gap: ${rem("9px")};
    align-items: center;
    justify-content: center;
    overflow: hidden;

    & > svg {
      width: ${rem("14px")};

      & path {
        stroke: ${style?.stroke || (isOpen ? white : gray900)};
      }
    }
  `;
});