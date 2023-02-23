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
import { rem } from "polished";
export var Column = styled.div(function () { return function (_a) {
    var isActive = _a.isActive, size = _a.size, style = _a.style;
    var left = {
        sm: rem("42px"),
        md: rem("52px"),
        lg: rem("60px"),
        xl: rem("72px"),
    };
    var icon = {
        xs: rem("24px"),
        sm: rem("36px"),
        md: rem("40px"),
        lg: rem("48px"),
        xl: rem("56px"),
    };
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 0;\n    box-shadow: ", ";\n    width: ", ";\n    height: ", ";\n\n    &:nth-child(2) {\n      margin-left: ", ";\n    }\n\n    ", "\n  "], ["\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 0;\n    box-shadow: ", ";\n    width: ", ";\n    height: ", ";\n\n    &:nth-child(2) {\n      margin-left: ", ";\n    }\n\n    ", "\n  "])), isActive ? "0 0 0 4px #E0E7FF" : "none", (style === null || style === void 0 ? void 0 : style.width) || icon[size], (style === null || style === void 0 ? void 0 : style.height) || icon[size], (style === null || style === void 0 ? void 0 : style.marginLeft) || left[size], __assign({}, style));
}; });
var templateObject_1;
//# sourceMappingURL=column.js.map