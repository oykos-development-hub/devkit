import styled, { css, DefaultTheme } from "styled-components";
import { SwitchSizes } from "../types";
import React from "react";
import { rem } from "polished";

export const TextWrapper = styled.div<{
  size: SwitchSizes | string;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}>(() => ({ size, style, theme }) => {
  const { gray600, gray900 } = theme!.palette;

  const fontSize = {
    sm: rem("14px"),
    md: rem("16px"),
  };

  return css`
    display: flex;
    flex: 2;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    width: auto;
    height: auto;
    white-space: nowrap;

    & p {
      margin: 0;
      padding: 0;
      &:nth-child(1) {
        color: ${gray900};
        font-size: ${style?.fontSize || fontSize[size]};
        font-weight: 500;
      }
      &:nth-child(2) {
        color: ${gray600};
        font-size: ${style?.fontSize || fontSize[size]};
      }
    }
    ${{ ...style }}
  `;
});
