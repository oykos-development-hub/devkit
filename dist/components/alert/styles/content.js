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
    var themeToUse = theme || Theme || {};
    var fontSize = themeToUse.typographyFontSize.body;
    var textSize = {
        xs: fontSize.sm,
        sm: fontSize.sm,
        md: fontSize.md,
        lg: fontSize.lg,
        xl: fontSize.lg,
    };
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    padding: 0;\n    gap: 1rem;\n\n    & p {\n      font-size: ", " !important;\n    }\n\n    ", "\n  "], ["\n    display: flex;\n    flex-direction: row;\n    padding: 0;\n    gap: 1rem;\n\n    & p {\n      font-size: ", " !important;\n    }\n\n    ", "\n  "])), (style === null || style === void 0 ? void 0 : style.fontSize) || textSize[size], __assign({}, style));
}; });
var templateObject_1;
//# sourceMappingURL=content.js.map