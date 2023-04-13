import styled, { css, DefaultTheme } from "styled-components";
import { CSSProperties } from "react";
import { rem } from "polished";

export const Header = styled.div<{
  isOpen: boolean;
  style?: CSSProperties;
  theme?: DefaultTheme;
}>(({ isOpen, style, theme }) => {
  const { white, primary500, gray900 } = theme!.palette;

  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${rem("8px")} ${rem("16px")};
    gap: ${rem("8px")};
    background-color: ${style?.backgroundColor || (isOpen ? primary500 : white)};
    cursor: ${style?.cursor || "pointer"};
    border-radius: ${style?.borderRadius || "0"};
    overflow: hidden;

    & > span,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    svg {
      color: ${style?.color || (isOpen ? white : gray900)};
    }

    & > svg {
      width: ${rem("14px")};
      transform: ${isOpen && "rotate(-180deg)"};
      transition: 0.3s all;

      & path {
        stroke: ${style?.stroke || (isOpen ? white : gray900)};
      }
    }
  `;
});
