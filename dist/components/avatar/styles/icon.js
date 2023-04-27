import styled, { css } from "styled-components";
import { rem } from "polished";
export const Icon = styled.div(() => ({ size, style, theme }) => {
    const { gray200 } = theme.palette;
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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${circle[size]};
    height: ${circle[size]};
    border-radius: 50%;
    background-color: ${(style === null || style === void 0 ? void 0 : style.backgroundColor) || gray200};
    z-index: 2;

    & svg {
      width: ${icon[size]};
      height: ${icon[size]};
    }

    ${Object.assign({}, style)}
  `;
});
//# sourceMappingURL=icon.js.map