import styled, { css, DefaultTheme } from "styled-components";
import { CSSProperties } from "react";
import { rem } from "polished";

export const Header = styled.div<{
  isOpen?: boolean;
  style?: CSSProperties;
  theme?: DefaultTheme;
}>(({ isOpen, style, theme }) => {
  const { white, gray200, gray900 } = theme!.palette;

  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${rem("8px")} ${rem("16px")};
    gap: ${rem("8px")};
    background-color: ${style?.backgroundColor || white};
    transition: background-color 0.3s ease-in-out;
    cursor: ${style?.cursor || "pointer"};
    border-bottom: 1px solid ${gray200};
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
      color: ${style?.color || gray900};
    }

    & > svg {
      width: ${rem("14px")};
      transform: ${isOpen && "rotate(180deg)"};
      transition: opacity 0.3s linear, transform 0.3s linear;

      & path {
        stroke: ${style?.stroke || gray900};
      }
    }
  `;
});
