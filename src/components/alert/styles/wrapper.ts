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

  const { primary600, success600, gray700, warning600, error600 } = theme!.palette;

  const bgColor = {
    primary: primary600,
    info: gray700,
    success: success600,
    warning: warning600,
    error: error600,
  };

  return css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;
    align-items: center;
    align-self: stretch;
    word-wrap: break-word;
    padding: ${padding[size]};
    width: 100%;

    & ${Content}:nth-child(1) {
      // left icon
      & > svg {
        width: ${rem("24px")};
        height: ${rem("24px")};
      }
    }

    & ${Content}:nth-child(2) {
      // close icon (right icon)
      & svg {
        width: ${rem("16px")};
        padding: ${rem("6px")};
        border-radius: 0.125rem;
        cursor: pointer;

        &:hover {
          background-color: ${bgColor[variant]};
        }
      }
    }
  `;
});
