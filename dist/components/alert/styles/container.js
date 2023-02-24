import styled, { css } from "styled-components";
import { Theme } from "../../../shared/theme";
export const Container = styled.div(() => ({ theme, variant, style }) => {
    var _a;
    const themeToUse = theme || Theme;
    const { primary500, success500, error500, gray600 } = themeToUse.palette || {};
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
    font-family: ${((_a = themeToUse.fontFamily) === null || _a === void 0 ? void 0 : _a.one) || "sans-serif"};
    background-color: ${background[variant]};
    border-radius: 0.125rem;
    padding: 0;
    gap: 0.75rem;
    z-index: 999;

    ${Object.assign({}, style)}
  `;
});
export const Row = styled.div(() => ({ size }) => {
    const gapSize = {
        sm: "0.75rem",
        md: "0.75rem",
        lg: "1rem",
    };
    const padding = {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
    };
    return css `
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-content: flex-start;
    align-items: center;
    align-self: stretch;
    word-wrap: break-word;
    padding: ${padding[size]};
    gap: ${gapSize[size]};
  `;
});
//# sourceMappingURL=container.js.map