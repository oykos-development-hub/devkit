import styled, { css } from "styled-components";
import { rem } from "polished";
export const Icon = styled.div(() => ({ size, style, theme }) => {
    const { gray200, primary500 } = theme.palette;
    const circle = {
        xs: rem("24px"),
        sm: rem("36px"),
        md: rem("40px"),
        lg: rem("48px"),
        xl: rem("56px"),
    };
    const icon = {
        xs: rem("16px"),
        sm: rem("20px"),
        md: rem("24px"),
        lg: rem("28px"),
        xl: rem("32px"),
    };
    return css `
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(style === null || style === void 0 ? void 0 : style.width) || circle[size]};
    height: ${(style === null || style === void 0 ? void 0 : style.height) || circle[size]};
    border-radius: 50%;
    background-color: ${(style === null || style === void 0 ? void 0 : style.backgroundColor) || gray200};
    z-index: 1;

    & svg {
      width: ${(style === null || style === void 0 ? void 0 : style.width) || icon[size]} !important;
      height: ${(style === null || style === void 0 ? void 0 : style.height) || icon[size]} !important;

      & path {
        color: ${(style === null || style === void 0 ? void 0 : style.color) || primary500};
        fill: ${(style === null || style === void 0 ? void 0 : style.color) || primary500};
      }
    }

    &:active,
    &:focus-within {
      box-shadow: 0 0 0 ${rem("4px")} #e0e7ff;
    }

    ${Object.assign({}, style)}
  `;
});
//# sourceMappingURL=icon.js.map