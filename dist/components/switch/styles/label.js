import styled, { css } from "styled-components";
import { rem } from "polished";
import { Input } from "./input";
export const Label = styled.label(({ isChecked, isActive, disabled, size, theme }) => {
    const { primary50, primary500, gray300, gray400 } = theme.palette;
    const width = {
        sm: rem("36px"),
        md: rem("44px"),
    };
    const height = {
        sm: rem("20px"),
        md: rem("24px"),
    };
    return css `
    position: relative;
    width: ${width[size]};
    height: ${height[size]};
    background-color: ${isChecked && !disabled ? primary500 : gray300};
    border-radius: ${rem("12px")};
    box-shadow: ${isActive && !disabled && `0 0 0 ${rem("4px")} ${primary50}`};

    & ${Input} {
      display: none;
    }

    & :hover {
      background-color: ${!disabled && !isChecked && gray400};
    }

    & :active,
    & :focus-within {
      box-shadow: ${!isActive && !disabled && `0 0 0 ${rem("4px")} #F4EBFF`};
    }
  `;
});
//# sourceMappingURL=label.js.map