import styled, { css } from "styled-components";
export const Container = styled.div(() => ({ hasContent, style }) => {
    return css `
    display: flex;
    flex-direction: row;
    align-items: ${hasContent && "flex-start"};
    padding: ${(style === null || style === void 0 ? void 0 : style.padding) || "0"};
    z-index: 1;

    ${Object.assign({}, style)}
  `;
});
//# sourceMappingURL=container.js.map