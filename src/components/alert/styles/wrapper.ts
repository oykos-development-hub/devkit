import styled, { css, DefaultTheme } from "styled-components";
import { AlertSizes, AlertVariants } from "../types";
import { rem } from "polished";
import { Content } from "./content";

export const Wrapper = styled.div<{
  variant?: AlertVariants | `${AlertVariants}`;
  size: AlertSizes | `${AlertSizes}`;
  theme?: DefaultTheme;
}>(() => ({ variant = "success", size, theme }) => {
  const padding = {
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
  };

  const { primary600, success600, secondary600, warning600, error600 } = theme!.palette;

  const bgColor = {
    primary: primary600,
    info: secondary600,
    success: success600,
    warning: warning600,
    error: error600,
  };

  return css`
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    align-items: center;
    align-self: stretch;
    word-wrap: break-word;
    padding: ${padding[size]};
    width: 100%;

    & ${Content}:nth-child(2) {
      padding: ${rem("6px")};
      border-radius: 0.125rem;

      &:hover {
        background-color: ${bgColor[variant]};
      }
    }
  `;
});
