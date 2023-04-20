import styled, { css } from "styled-components";
export const Container = styled.hr(({ color, width, height, style, theme }) => {
    const { gray200 } = theme.palette;
    return css `
    width: ${(style === null || style === void 0 ? void 0 : style.width) || width};
    height: ${(style === null || style === void 0 ? void 0 : style.height) || height};
    background-color: ${(style === null || style === void 0 ? void 0 : style.backgroundColor) || color || gray200};
    border: none;
  `;
});
//# sourceMappingURL=container.js.map