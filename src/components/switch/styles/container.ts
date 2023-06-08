import styled, { css, DefaultTheme } from "styled-components";
import { CSSProperties } from "react";

export const Container = styled.div<{
  hasLabel?: boolean;
  disabled?: boolean;
  theme?: DefaultTheme;
  style?: CSSProperties;
  rtl?: boolean;
}>(() => ({ hasLabel, disabled, theme, style, rtl }) => {
  const { gray300 } = theme!.palette;

  return css`
    display: flex;
    flex-direction: ${rtl ? "row" : "row-reverse"};
    align-items: center;
    justify-content: ${hasLabel && "space-between"};
    gap: ${hasLabel && "0.5rem"};
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
