var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import styled, { css } from "styled-components";
import { Theme } from "../../../shared/theme";
export var Container = styled.button(function () { return function (_a) {
    var theme = _a.theme, disabled = _a.disabled, variant = _a.variant, size = _a.size, style = _a.style;
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
        xs: "0.5rem 0.875rem",
        sm: "0.625rem 1rem",
        md: "0.625rem 1.125rem",
        lg: "0.75rem 1.25rem",
        xl: "1rem 1.75rem",
    };
    var hoverTextColor = {
        primary: white,
        secondary: gray50,
        tertiary: white,
    };
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    align-items: center;\n    justify-content: center;\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: ", ";\n    padding: ", ";\n    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);\n    &:hover {\n      background-color: ", ";\n      div {\n        color: ", ";\n      }\n    }\n    ", "\n  "], ["\n    align-items: center;\n    justify-content: center;\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: ", ";\n    padding: ", ";\n    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);\n    &:hover {\n      background-color: ", ";\n      div {\n        color: ", ";\n      }\n    }\n    ", "\n  "])), background[variant], borderColor[variant], themeToUse.borderRadius.lg || "0.5rem", padding[size], hoverBackground[variant], hoverTextColor[variant], __assign({}, style));
}; });
var templateObject_1;
//# sourceMappingURL=container.js.map