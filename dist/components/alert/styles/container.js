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
export var Container = styled.div(function () { return function (_a) {
    var _b;
    var theme = _a.theme, variant = _a.variant, size = _a.size, style = _a.style;
    var themeToUse = theme || Theme;
    var _c = themeToUse.palette || {}, white = _c.white, primary500 = _c.primary500, success500 = _c.success500, error500 = _c.error500, gray600 = _c.gray600;
    var background = {
        primary: primary500,
        success: success500,
        error: error500,
        info: gray600,
    };
    var padding = {
        xs: "0.5rem 0.875rem",
        sm: "0.625rem 1rem",
        md: "0.625rem 1.125rem",
        lg: "0.75rem 1.25rem",
        xl: "1rem 1.75rem",
    };
    var textColor = {
        primary: white,
        success: white,
        error: white,
        info: white,
    };
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-family: ", ";\n    background-color: ", ";\n    color: ", ";\n    display: flex;\n    align-content: center;\n    border-radius: 0.5rem;\n    padding: ", ";\n    gap: 0.75rem;\n    z-index: 999;\n    flex: none;\n    order: 0;\n    flex-grow: 1;\n\n    ", "\n  "], ["\n    font-family: ", ";\n    background-color: ", ";\n    color: ", ";\n    display: flex;\n    align-content: center;\n    border-radius: 0.5rem;\n    padding: ", ";\n    gap: 0.75rem;\n    z-index: 999;\n    flex: none;\n    order: 0;\n    flex-grow: 1;\n\n    ", "\n  "])), ((_b = themeToUse.fontFamily) === null || _b === void 0 ? void 0 : _b.one) || "sans-serif", background[variant], (style === null || style === void 0 ? void 0 : style.color) || textColor[variant], padding[size], __assign({}, style));
}; });
var templateObject_1;
//# sourceMappingURL=container.js.map