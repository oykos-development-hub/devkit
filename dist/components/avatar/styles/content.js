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
export var Content = styled.div(function () { return function (_a) {
    var size = _a.size, style = _a.style, theme = _a.theme;
    var themeToUse = theme || Theme;
    var _b = themeToUse.palette, gray600 = _b.gray600, gray900 = _b.gray900;
    var width = {
        sm: rem("90px"),
        md: rem("105px"),
        lg: rem("120px"),
        xl: rem("120px"),
    };
    var height = {
        sm: rem("36px"),
        md: rem("40px"),
        lg: rem("48px"),
        xl: rem("56px"),
    };
    var name = {
        sm: rem("12px"),
        md: rem("14px"),
        lg: rem("16px"),
        xl: rem("18px"),
    };
    var email = {
        sm: rem("10px"),
        md: rem("12px"),
        lg: rem("16px"),
        xl: rem("16px"),
    };
    var marginTopName = {
        sm: rem("12px"),
        md: rem("12px"),
        lg: rem("14px"),
        xl: rem("16px"),
    };
    var marginTopEmail = {
        sm: rem("14px"),
        md: rem("16px"),
        lg: rem("20px"),
        xl: rem("24px"),
    };
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", ";\n    height: ", ";\n\n    & p:nth-child(1) {\n      color: ", ";\n      font-size: ", ";\n      line-height: 0;\n      margin-top: ", ";\n    }\n\n    & p:nth-child(2) {\n      color: ", ";\n      font-size: ", ";\n      text-decoration: ", ";\n      line-height: 0;\n      margin-top: ", ";\n    }\n\n    ", "\n  "], ["\n    width: ", ";\n    height: ", ";\n\n    & p:nth-child(1) {\n      color: ", ";\n      font-size: ", ";\n      line-height: 0;\n      margin-top: ", ";\n    }\n\n    & p:nth-child(2) {\n      color: ", ";\n      font-size: ", ";\n      text-decoration: ", ";\n      line-height: 0;\n      margin-top: ", ";\n    }\n\n    ", "\n  "])), (style === null || style === void 0 ? void 0 : style.width) || width[size], (style === null || style === void 0 ? void 0 : style.height) || height[size], (style === null || style === void 0 ? void 0 : style.color) || gray900, (style === null || style === void 0 ? void 0 : style.fontSize) || name[size], (style === null || style === void 0 ? void 0 : style.marginTop) || marginTopName[size], (style === null || style === void 0 ? void 0 : style.color) || gray600, (style === null || style === void 0 ? void 0 : style.fontSize) || email[size], (style === null || style === void 0 ? void 0 : style.textDecoration) || "none", (style === null || style === void 0 ? void 0 : style.marginTop) || marginTopEmail[size], __assign({}, style));
}; });
var templateObject_1;
//# sourceMappingURL=content.js.map