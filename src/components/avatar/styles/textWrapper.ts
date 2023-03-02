import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { rem } from "polished";
import { AvatarSizes } from "../types";

export const TextWrapper = styled.div<{
  size: AvatarSizes;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}>(() => ({ size, style, theme }) => {
  const { gray600 } = theme!.palette;

  const name = {
    sm: rem("14px"),
    md: rem("14px"),
    lg: rem("16px"),
    xl: rem("18px"),
  };

  const email = {
    sm: rem("12px"),
    md: rem("14px"),
    lg: rem("16px"),
    xl: rem("16px"),
  };

  const nameLineHeight = {
    sm: rem("20px"),
    md: rem("20px"),
    lg: rem("24px"),
    xl: rem("26px"),
  };

  const emailLineHeight = {
    sm: rem("16px"),
    md: rem("20px"),
    lg: rem("24px"),
    xl: rem("24px"),
  };

  const marginLeft = {
    sm: rem("10px"),
    md: rem("12px"),
    lg: rem("12px"),
    xl: rem("16px"),
  };

  return css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
    width: 100%;
    height: 100%;

    color: ${gray600};
    font-size: ${email[size]};

    & p {
      margin: 0;
      padding: 0;

      &:nth-child(1) {
        font-size: ${name[size]};
        line-height: ${nameLineHeight[size]};
      }

      &:nth-child(2) {
        font-size: ${email[size]};
        line-height: ${emailLineHeight[size]};
      }
    }

    margin-left: ${marginLeft[size]};

    ${{ ...style }}
  `;
});
