import styled, { css, DefaultTheme } from "styled-components";
import { CSSProperties } from "react";
import { rem } from "polished";

export const ContentWrapper = styled.div<{ isOpen: boolean }>(({ isOpen }) => {
  return css`
    max-height: ${isOpen ? "1000px" : "0"};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  `;
});

export const Content = styled.div<{
  style?: CSSProperties;
  theme?: DefaultTheme;
}>(({ style, theme }) => {
  const { white } = theme!.palette;

  return css`
    display: flex;
    align-items: flex-start;
    padding: ${rem("4px")} ${rem("16px")} ${rem("16px")};
    gap: ${rem("8px")};
    background-color: ${style?.backgroundColor || white};
  `;
});
