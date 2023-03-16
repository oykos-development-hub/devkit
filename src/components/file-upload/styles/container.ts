import React from "react";
import styled, { css, DefaultTheme } from "styled-components";

export const Container = styled.div<{
  isDragging: boolean;
  icon?: React.ReactElement;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}>(({ isDragging, icon, style, theme }) => {
  const { gray600 } = theme!.palette;

  return css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 56px;
    gap: 24px;

    background: ${isDragging ? "#eee" : "#fff"};

    border: 1px dashed ${gray600};
    border-radius: 10px;
  `;
});
