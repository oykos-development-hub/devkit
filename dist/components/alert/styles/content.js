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
export var Content = styled.div(function () { return function (_a) {
    var size = _a.size, style = _a.style, theme = _a.theme;
    var themeToUse = theme || Theme;
    var white = (themeToUse.palette || {}).white;
    var defaultColor = (style === null || style === void 0 ? void 0 : style.color) || white;
    var textSize = {
        sm: "0.75rem",
        md: "0.875rem",
        lg: "1rem",
    };
    var leftIconSize = {
        sm: "1.25rem",
        md: "1.25rem",
        lg: "1.5rem",
    };
    var rightIconSize = {
        sm: "0.729rem",
        md: "0.729rem",
        lg: "0.875rem",
    };
    var lineHeight = {
        sm: "1rem",
        md: "1.25rem",
        lg: "1.5rem",
    };
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    padding: 0;\n    gap: 0.75rem;\n\n    & p {\n      font-size: ", ";\n      line-height: ", ";\n      color: ", ";\n    }\n\n    & p:nth-child(1) {\n      font-size: 0.875rem;\n      line-height: 1.25rem;\n      color: ", ";\n    }\n\n    & svg:first-child {\n      width: ", " !important;\n      height: ", " !important;\n    }\n\n    & svg:last-child {\n      width: ", " !important;\n      height: ", " !important;\n    }\n\n    & svg path {\n      fill: ", " !important;\n      color: ", " !important;\n    }\n\n    ", "\n  "], ["\n    display: flex;\n    flex-direction: row;\n    padding: 0;\n    gap: 0.75rem;\n\n    & p {\n      font-size: ", ";\n      line-height: ", ";\n      color: ", ";\n    }\n\n    & p:nth-child(1) {\n      font-size: 0.875rem;\n      line-height: 1.25rem;\n      color: ", ";\n    }\n\n    & svg:first-child {\n      width: ", " !important;\n      height: ", " !important;\n    }\n\n    & svg:last-child {\n      width: ", " !important;\n      height: ", " !important;\n    }\n\n    & svg path {\n      fill: ", " !important;\n      color: ", " !important;\n    }\n\n    ", "\n  "])), textSize[size], lineHeight[size], defaultColor, defaultColor, leftIconSize[size], leftIconSize[size], rightIconSize[size], rightIconSize[size], defaultColor, defaultColor, __assign({}, style));
}; });
var templateObject_1;
//# sourceMappingURL=content.js.map