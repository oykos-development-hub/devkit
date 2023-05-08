import styled, { css, DefaultTheme } from "styled-components";
import { SwitchSizes } from "../types";
import { rem } from "polished";
import { Input } from "./input";

export const Label = styled.label<{
  isActive?: boolean;
  isChecked?: boolean;
  disabled?: boolean;
  size: SwitchSizes | `${SwitchSizes}`;
  theme?: DefaultTheme;
}>(({ isChecked, isActive, disabled, size, theme }) => {
  const { primary50, primary500, gray300, gray400 } = theme!.palette;

  const width = {
    sm: rem("36px"),
    md: rem("44px"),
  };

  const height = {
    sm: rem("20px"),
    md: rem("24px"),
  };

  return css`
    position: relative;
    width: ${width[size]};
    height: ${height[size]};
    background-color: ${isChecked && !disabled ? primary500 : gray300};
    border-radius: ${rem("12px")};
    box-shadow: ${isActive && !disabled && `0 0 0 ${rem("4px")} ${primary50}`};

    & ${Input} {
      display: none;
    }

    &:hover {
      background-color: ${!disabled && !isChecked && gray400};
    }

    &:active,
    &:focus-within {
      box-shadow: ${!isActive && !disabled && `0 0 0 ${rem("4px")} ${primary50}`};
    }
  `;
});
