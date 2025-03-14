import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { rem } from "polished";

export const Content = styled.div<{
  style?: React.CSSProperties;
  theme: DefaultTheme;
}>(() => ({ theme, style }) => {
  const { white } = theme!.palette;

  return css`
    display: flex;
    gap: ${rem("16px")};
    align-items: center;

    // Typography component
    & > p {
      display: contents;
      margin: 0;
      line-height: 0;
      color: ${style?.color || white};
    }

    // description (if exists)
    & p:nth-child(1) {
      color: ${style?.color || white};
    }
  `;
});
