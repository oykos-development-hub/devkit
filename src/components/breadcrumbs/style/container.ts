import styled, { css, CSSProperties } from "styled-components";

export const Container = styled.ul<{ style?: CSSProperties }>(({ style }) => {
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

    ${{ ...style }}
  `;
});
