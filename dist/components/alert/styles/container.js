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
    var theme = _a.theme, variant = _a.variant, style = _a.style;
    var themeToUse = theme || Theme;
    var _c = themeToUse.palette || {}, primary500 = _c.primary500, success500 = _c.success500, error500 = _c.error500, gray600 = _c.gray600;
    var background = {
        primary: primary500,
        success: success500,
        error: error500,
        info: gray600,
    };
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    flex: none;\n    align-items: center;\n    max-width: 828px;\n    max-height: fit-content;\n    flex-grow: 1;\n    font-family: ", ";\n    background-color: ", ";\n    border-radius: 0.125rem;\n    padding: 0;\n    gap: 0.75rem;\n    z-index: 999;\n\n    ", "\n  "], ["\n    flex: none;\n    align-items: center;\n    max-width: 828px;\n    max-height: fit-content;\n    flex-grow: 1;\n    font-family: ", ";\n    background-color: ", ";\n    border-radius: 0.125rem;\n    padding: 0;\n    gap: 0.75rem;\n    z-index: 999;\n\n    ", "\n  "])), ((_b = themeToUse.fontFamily) === null || _b === void 0 ? void 0 : _b.one) || "sans-serif", background[variant], __assign({}, style));
}; });
export var Row = styled.div(function () { return function (_a) {
    var size = _a.size;
    var gapSize = {
        sm: "0.75rem",
        md: "0.75rem",
        lg: "1rem",
    };
    var padding = {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
    };
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n    align-content: flex-start;\n    align-items: center;\n    align-self: stretch;\n    word-wrap: break-word;\n    padding: ", ";\n    gap: ", ";\n  "], ["\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n    align-content: flex-start;\n    align-items: center;\n    align-self: stretch;\n    word-wrap: break-word;\n    padding: ", ";\n    gap: ", ";\n  "])), padding[size], gapSize[size]);
}; });
var templateObject_1, templateObject_2;
//# sourceMappingURL=container.js.map