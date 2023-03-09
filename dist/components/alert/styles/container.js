import styled, { css } from "styled-components";
export const Container = styled.div(() => ({ theme, variant, style }) => {
    var _a;
    const { primary500, success500, error500, gray600 } = theme.palette;
    const background = {
        primary: primary500,
        success: success500,
        error: error500,
        info: gray600,
    };
    return css `
    flex: none;
    align-items: center;
    max-width: 828px;
    max-height: fit-content;
    flex-grow: 1;
    font-family: ${((_a = theme.fontFamily) === null || _a === void 0 ? void 0 : _a.one) || "sans-serif"};
    background-color: ${background[variant]};
    border-radius: 0.125rem;
    z-index: 999;
    width: ${(style === null || style === void 0 ? void 0 : style.width) || "auto"};
    height: ${(style === null || style === void 0 ? void 0 : style.height) || "auto"};
  `;
});
//# sourceMappingURL=container.js.map