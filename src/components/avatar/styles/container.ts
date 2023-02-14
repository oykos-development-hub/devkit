import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { Theme } from "../../../shared/theme";
import { rem } from "polished";

export const Container = styled.div<{
  theme?: DefaultTheme;
  style?: React.CSSProperties;
}>(() => ({ style, theme }) => {
  const themeToUse = theme || Theme;
  const { gray600, gray900 } = themeToUse.palette;

  return css`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: ${style?.width || rem("160px")};
    height: ${style?.height || rem("276px")};
    padding: ${style?.padding || "0"};

    & p {
      color: ${style?.color || gray900};
    }

    & span {
      color: ${style?.color || gray600};
    }

    ${{ ...style }}
  `;
});
