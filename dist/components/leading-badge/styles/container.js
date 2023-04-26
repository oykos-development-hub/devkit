import styled, { css } from "styled-components";
import { rem } from "polished";
export const Container = styled.div(({ variant, size, style, leadingBadgeTheme, theme }) => {
    const { white, gray100, gray200, primary50, primary500, warning50, warning100, warning500, error50, error100, error500, success50, success100, success500, } = theme.palette;
    const padding = `${rem("4px")} ${rem("12px")} ${rem("4px")} ${rem("4px")}`;
    const gap = {
        md: rem("8px"),
        lg: rem("12px"),
    };
    const textColor = {
        primary: primary500,
        warning: warning500,
        error: error500,
        success: success500,
    };
    const badgeBgColor = {
        primary: {
            light: white,
            medium: gray200,
            dark: primary500,
        },
        warning: {
            light: white,
            medium: warning50,
            dark: warning500,
        },
        error: {
            light: white,
            medium: error50,
            dark: error500,
        },
        success: {
            light: white,
            medium: success50,
            dark: success500,
        },
    };
    const bgColor = {
        primary: {
            light: gray100,
            medium: primary50,
            dark: white,
        },
        warning: {
            light: warning50,
            medium: warning100,
            dark: white,
        },
        error: {
            light: error50,
            medium: error100,
            dark: white,
        },
        success: {
            light: success50,
            medium: success100,
            dark: white,
        },
    };
    const badgeFontWeight = {
        md: "400",
        lg: "500",
    };
    const fontSize = {
        md: rem("12px"),
        lg: rem("14px"),
    };
    const badgeLineHeight = {
        md: rem("16px"),
        lg: rem("20px"),
    };
    const leadingLineHeight = {
        md: rem("24px"),
        lg: rem("20px"),
    };
    return css `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${(style === null || style === void 0 ? void 0 : style.padding) || padding};
    background-color: ${(style === null || style === void 0 ? void 0 : style.backgroundColor) || bgColor[variant][leadingBadgeTheme]};
    color: ${(style === null || style === void 0 ? void 0 : style.color) || textColor[variant]};
    font-family: ${(style === null || style === void 0 ? void 0 : style.fontFamily) || theme.fontFamily.one};
    font-size: ${(style === null || style === void 0 ? void 0 : style.fontSize) || fontSize[size]};
    font-weight: ${(style === null || style === void 0 ? void 0 : style.fontWeight) || "500"};
    line-height: ${(style === null || style === void 0 ? void 0 : style.lineHeight) || leadingLineHeight[size]};
    border-radius: ${rem("16px")};
    mix-blend-mode: multiply;
    column-gap: ${(style === null || style === void 0 ? void 0 : style.gap) || gap[size]};

    // Icon (if exists)
    & svg {
      width: ${rem("6px")} !important;
      height: ${rem("6px")} !important;
      fill: ${(style === null || style === void 0 ? void 0 : style.color) || textColor[variant]};
    }

    // Badge
    & > div:first-of-type {
      font-size: ${(style === null || style === void 0 ? void 0 : style.fontSize) || fontSize[size]};
      font-weight: ${(style === null || style === void 0 ? void 0 : style.fontWeight) || badgeFontWeight[size]};
      line-height: ${(style === null || style === void 0 ? void 0 : style.lineHeight) || badgeLineHeight[size]};
      background-color: ${badgeBgColor[variant][leadingBadgeTheme]};
      color: ${(style === null || style === void 0 ? void 0 : style.color) ||
        (textColor[variant] === badgeBgColor[variant][leadingBadgeTheme] ? white : textColor[variant])};
      mix-blend-mode: normal;
    }
  `;
});
//# sourceMappingURL=container.js.map