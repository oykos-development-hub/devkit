import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { AlertSizes } from "../types";
import { rem } from "polished";

export const Content = styled.div<{
  size: AlertSizes | `${AlertSizes}`;
  style?: React.CSSProperties;
  theme: DefaultTheme;
}>(() => ({ size, theme, style }) => {
  const { white } = theme!.palette;

  const gap = {
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
  };

  const iconSize = {
    sm: "1.25rem",
    md: "1.25rem",
    lg: "1.5rem",
  };

  return css`
    display: flex;
    gap: ${gap[size]};
    align-items: center;
    justify-content: flex-start;

    & p {
      margin: 0;
      color: ${style?.color || white};
    }

    // description (if exists)
    & p:nth-child(1) {
      color: ${style?.color || white};
    }

    & svg {
      width: ${iconSize[size]};
      height: ${iconSize[size]};
      cursor: pointer;
    }
  `;
});
