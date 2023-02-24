import styled, { css } from "styled-components";
import { Theme } from "../../../shared/theme";
export const Content = styled.div(() => ({ size, style, theme }) => {
    const themeToUse = theme || Theme;
    const { white } = themeToUse.palette;
    const defaultColor = (style === null || style === void 0 ? void 0 : style.color) || white;
    const textSize = {
        sm: "0.75rem",
        md: "0.875rem",
        lg: "1rem",
    };
    const iconSize = {
        sm: "1.25rem",
        md: "1.25rem",
        lg: "1.5rem",
    };
    const lineHeight = {
        sm: "1rem",
        md: "1.25rem",
        lg: "1.5rem",
    };
    return css `
    display: flex;
    flex-direction: row;
    padding: 0;
    gap: 0.75rem;

    & p {
      font-size: ${(style === null || style === void 0 ? void 0 : style.fontSize) || textSize[size]};
      line-height: ${(style === null || style === void 0 ? void 0 : style.lineHeight) || lineHeight[size]};
      color: ${(style === null || style === void 0 ? void 0 : style.color) || defaultColor};
    }

    & p:nth-child(1) {
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${(style === null || style === void 0 ? void 0 : style.color) || defaultColor};
    }

    & svg:first-child {
      width: ${(style === null || style === void 0 ? void 0 : style.width) || iconSize[size]} !important;
      height: ${(style === null || style === void 0 ? void 0 : style.height) || iconSize[size]} !important;
    }

    & svg:last-child {
      width: ${(style === null || style === void 0 ? void 0 : style.width) || iconSize[size]} !important;
      height: ${(style === null || style === void 0 ? void 0 : style.height) || iconSize[size]} !important;
    }

    & svg path {
      fill: ${(style === null || style === void 0 ? void 0 : style.color) || defaultColor} !important;
      color: ${(style === null || style === void 0 ? void 0 : style.color) || defaultColor} !important;
    }

    ${Object.assign({}, style)}
  `;
});
//# sourceMappingURL=content.js.map