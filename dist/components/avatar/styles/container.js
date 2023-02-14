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
import { rem } from "polished";
export var Container = styled.div(function () { return function (_a) {
    var style = _a.style, theme = _a.theme;
    var themeToUse = theme || Theme;
    var _b = themeToUse.palette, gray600 = _b.gray600, gray900 = _b.gray900;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    width: ", ";\n    height: ", ";\n    padding: ", ";\n\n    & p {\n      color: ", ";\n    }\n\n    & span {\n      color: ", ";\n    }\n\n    ", "\n  "], ["\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    width: ", ";\n    height: ", ";\n    padding: ", ";\n\n    & p {\n      color: ", ";\n    }\n\n    & span {\n      color: ", ";\n    }\n\n    ", "\n  "])), (style === null || style === void 0 ? void 0 : style.width) || rem("160px"), (style === null || style === void 0 ? void 0 : style.height) || rem("276px"), (style === null || style === void 0 ? void 0 : style.padding) || "0", (style === null || style === void 0 ? void 0 : style.color) || gray900, (style === null || style === void 0 ? void 0 : style.color) || gray600, __assign({}, style));
}; });
var templateObject_1;
//# sourceMappingURL=container.js.map