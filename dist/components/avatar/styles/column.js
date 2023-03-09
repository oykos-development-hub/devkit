import styled, { css } from "styled-components";
import { rem } from "polished";
export const Column = styled.div(() => ({ isActive, size, style }) => {
    const left = {
        sm: rem("42px"),
        md: rem("52px"),
        lg: rem("60px"),
        xl: rem("72px"),
    };
    const icon = {
        xs: rem("24px"),
        sm: rem("36px"),
        md: rem("40px"),
        lg: rem("48px"),
        xl: rem("56px"),
    };
    return css `
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    box-shadow: ${isActive ? "0 0 0 4px #E0E7FF" : "none"};
    width: ${(style === null || style === void 0 ? void 0 : style.width) || icon[size]};
    height: ${(style === null || style === void 0 ? void 0 : style.height) || icon[size]};

    &:nth-child(2) {
      margin-left: ${(style === null || style === void 0 ? void 0 : style.marginLeft) || left[size]};
    }

    ${Object.assign({}, style)}
  `;
});
//# sourceMappingURL=column.js.map