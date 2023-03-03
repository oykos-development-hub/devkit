import styled, { css } from "styled-components";
import { rem } from "polished";
export const Container = styled.div(() => ({ supportingText, size, style }) => {
    const columnGap = {
        sm: rem("10px"),
        md: rem("12px"),
        lg: rem("12px"),
        xl: rem("16px"),
    };
    return css `
    display: ${supportingText && "flex"};
    flex-wrap: ${supportingText && "wrap"};
    flex-direction: ${supportingText && "row"};
    align-items: center;
    width: ${(style === null || style === void 0 ? void 0 : style.width) || "auto"};
    height: ${(style === null || style === void 0 ? void 0 : style.height) || "auto"};
    padding: ${(style === null || style === void 0 ? void 0 : style.padding) || "0"};
    column-gap: ${(style === null || style === void 0 ? void 0 : style.columnGap) || columnGap[size]};
    z-index: 1;

    ${Object.assign({}, style)}
  `;
});
//# sourceMappingURL=container.js.map