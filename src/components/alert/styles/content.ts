import React from "react";
import styled, { css } from "styled-components";

export const Content = styled.div<{
  style?: React.CSSProperties | undefined;
}>(() => ({ style }) => {
  return css`
    display: flex;
    flex-direction: row;
    padding: 0;
    gap: 1rem;

    ${{ ...style }}
  `;
});
