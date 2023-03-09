import styled, { css } from "styled-components";
import { Theme } from "../../../shared/theme";
import { rem } from "polished";
export const Content = styled.div(() => ({ size, style, theme }) => {
    const themeToUse = theme || Theme;
    const { white } = themeToUse.palette;
    const defaultColor = (style === null || style === void 0 ? void 0 : style.color) || white;
    const gap = {
        sm: rem("8px"),
        md: rem("12px"),
        lg: rem("16px"),
    };
    const iconSize = {
        sm: "1.25rem",
        md: "1.25rem",
        lg: "1.5rem",
    };
    return css `
    display: flex;
    flex-direction: row;
    gap: ${gap[size]};
    align-items: center;

    & p {
      margin: 0;
      color: ${(style === null || style === void 0 ? void 0 : style.color) || defaultColor};
    }

    // description (if exists)
    & p:nth-child(1) {
      color: ${(style === null || style === void 0 ? void 0 : style.color) || defaultColor};
    }

    & svg {
      width: ${iconSize[size]} !important;
      height: ${iconSize[size]} !important;
    }

    & svg path {
      fill: ${(style === null || style === void 0 ? void 0 : style.color) || defaultColor} !important;
      color: ${(style === null || style === void 0 ? void 0 : style.color) || defaultColor} !important;
    }
  `;
});
//# sourceMappingURL=content.js.map