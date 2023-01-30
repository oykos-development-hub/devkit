var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { Theme } from "../../shared/theme";
export var Container = styled.button(function () { return function (_a) {
    var theme = _a.theme, disabled = _a.disabled, variant = _a.variant, size = _a.size;
    var themeToUse = theme || Theme;
    var _b = themeToUse.palette, gray50 = _b.gray50, white = _b.white, primary500 = _b.primary500, secondary500 = _b.secondary500, gray200 = _b.gray200, error500 = _b.error500, error100 = _b.error100, primary800 = _b.primary800, secondary800 = _b.secondary800, error800 = _b.error800;
    var background = {
        primary: disabled ? gray200 : primary500,
        secondary: disabled ? gray200 : secondary500,
        tertiary: disabled ? error100 : error500,
    };
    var hoverBackground = {
        primary: primary800,
        secondary: secondary800,
        tertiary: error800,
    };
    var borderColor = {
        primary: disabled ? gray200 : primary500,
        secondary: disabled ? gray200 : secondary500,
        tertiary: disabled ? error100 : error500,
    };
    var padding = {
        xs: "8px 14px",
        sm: "10px 16px",
        md: "10px 18px",
        lg: "12px 20px",
        xl: "16px 28px",
    };
    var hoverTextColor = {
        primary: white,
        secondary: gray50,
        tertiary: white,
    };
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    align-items: center;\n    justify-content: center;\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: 8px;\n    padding: ", ";\n    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);\n    &:hover {\n      background-color: ", ";\n      div {\n        color: ", ";\n      }\n    }\n  "], ["\n    align-items: center;\n    justify-content: center;\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: 8px;\n    padding: ", ";\n    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);\n    &:hover {\n      background-color: ", ";\n      div {\n        color: ", ";\n      }\n    }\n  "])), background[variant], borderColor[variant], padding[size], hoverBackground[variant], hoverTextColor[variant]);
}; });
export var Content = styled.div(function (_a) {
    var disabled = _a.disabled, theme = _a.theme, size = _a.size, variant = _a.variant;
    var themeToUse = theme || Theme;
    var _b = themeToUse.palette, gray300 = _b.gray300, gray700 = _b.gray700, white = _b.white;
    var fontSize = {
        xs: "14px",
        sm: "14px",
        md: "16px",
        lg: "16px",
        xl: "18px",
    };
    var textColor = {
        primary: disabled ? gray300 : white,
        secondary: disabled ? gray300 : gray700,
        tertiary: white,
    };
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: ", ";\n    font-size: ", ";\n  "], ["\n    color: ", ";\n    font-size: ", ";\n  "])), textColor[variant], fontSize[size]);
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styles.js.map