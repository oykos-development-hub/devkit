import styled, { css, DefaultTheme } from "styled-components";
import { CSSProperties } from "react";

export const Container = styled.div<{
  hasContent?: boolean;
  disabled?: boolean;
  theme?: DefaultTheme;
  style?: CSSProperties;
}>(() => ({ hasContent, disabled, theme, style }) => {
  const { gray300 } = theme!.palette;

  return css`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: ${hasContent && "flex-start"};
    padding: ${style?.padding || "0"};
    z-index: 1;

    & p,
    span,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${disabled && gray300};
    }

    ${{ ...style }}
  `;
});
