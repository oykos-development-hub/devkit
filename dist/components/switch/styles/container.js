import styled, { css } from "styled-components";
import { rem } from "polished";
export const Container = styled.div(() => ({ withContent, size, style }) => {
    const columnGap = {
        sm: rem("8px"),
        md: rem("12px"),
    };
    return css `
    display: ${withContent && "flex"};
    flex-direction: ${withContent && "row"};
    align-items: ${withContent && "flex-start"};
    width: ${(style === null || style === void 0 ? void 0 : style.width) || "auto"};
    height: ${(style === null || style === void 0 ? void 0 : style.height) || "auto"};
    padding: ${(style === null || style === void 0 ? void 0 : style.padding) || "0"};
    column-gap: ${(style === null || style === void 0 ? void 0 : style.columnGap) || columnGap[size]};
    z-index: 1;

    ${Object.assign({}, style)}
  `;
});
//# sourceMappingURL=container.js.map