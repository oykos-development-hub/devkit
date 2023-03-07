import styled, { css, CSSProperties, DefaultTheme } from "styled-components";

export const Link = styled.a<{ theme: DefaultTheme; style?: CSSProperties }>(({ theme, style }) => {
  const { gray900, gray500 } = theme.palette;

  return css`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25em;
    color: ${gray500};

    & path {
      fill: ${style?.color || gray500};
    }

    &.active {
      cursor: auto;
      pointer-events: none;
      color: ${gray900} !important;
      text-decoration: none;

      path {
        fill: ${gray900};
      }
    }

    ${{ ...style }}
  `;
});
