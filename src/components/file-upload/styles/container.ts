import { CSSProperties } from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { rem } from "polished";

export const Container = styled.div<{
  isDragging?: boolean;
  icon?: boolean;
  style?: CSSProperties;
  theme?: DefaultTheme;
}>(({ isDragging, icon, style, theme }) => {
  const { gray600, primary500 } = theme!.palette;

  return css`
    border-radius: ${rem("10px")};
    border: ${isDragging ? `2px dashed ${primary500}` : `1px dashed ${gray600}`};

    & input {
      display: none;
    }

    & svg {
      width: ${rem("52px")};
      height: ${rem("52px")};
    }
  `;
});
