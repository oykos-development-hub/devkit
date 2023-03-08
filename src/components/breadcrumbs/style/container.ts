import styled, { css, CSSProperties, DefaultTheme } from "styled-components";

export const Container = styled.ul<{ theme: DefaultTheme; style?: CSSProperties }>(({ theme, style }) => {
  const { gray900 } = theme.palette;

  return css`
    list-style-type: none;
    display: flex;
    align-items: center;
    padding: 0.75em;
    border-radius: 1.5em;

    & li {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75em;
      margin: 0 1em 0 0;
    }

    & li:last-child {
      margin-right: 0;
    }

    & path {
      fill: ${gray900};
    }

    ${{ ...style }}
  `;
});
