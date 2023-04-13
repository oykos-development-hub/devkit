import styled, { css, DefaultTheme } from "styled-components";
import { CSSProperties } from "react";
import { rem } from "polished";

export const Content = styled.div<{
  isOpen: boolean;
  style?: CSSProperties;
  theme?: DefaultTheme;
}>(({ style, theme, isOpen }) => {
  const { gray100 } = theme!.palette;

  return css`
    align-items: flex-start;
    padding: ${rem("4px")} ${rem("16px")} ${rem("16px")};
    gap: ${rem("8px")};
    background-color: ${style?.backgroundColor || gray100};
    overflow: hidden;

    visibility: ${isOpen ? `visible` : "hidden"};
    height: ${isOpen ? `auto` : "0"};
    opacity: ${isOpen ? 1 : 0};
    transform: ${isOpen ? `translateY(0)` : `translateY(-6px)`};
    transition: 0.2s all;
  `;
});
