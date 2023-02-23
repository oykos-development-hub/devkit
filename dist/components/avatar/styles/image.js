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
export var Image = styled.img(function () { return function (_a) {
    var size = _a.size, style = _a.style;
    var circle = {
        xs: rem("24px"),
        sm: rem("36px"),
        md: rem("40px"),
        lg: rem("48px"),
        xl: rem("56px"),
    };
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    width: ", ";\n    height: ", ";\n    object-fit: cover;\n    object-position: center;\n    border-radius: 50%;\n    z-index: 1;\n\n    &:active,\n    &:focus-within {\n      box-shadow: 0 0 0 4px #e0e7ff !important;\n    }\n\n    ", "\n  "], ["\n    position: absolute;\n    width: ", ";\n    height: ", ";\n    object-fit: cover;\n    object-position: center;\n    border-radius: 50%;\n    z-index: 1;\n\n    &:active,\n    &:focus-within {\n      box-shadow: 0 0 0 4px #e0e7ff !important;\n    }\n\n    ", "\n  "])), (style === null || style === void 0 ? void 0 : style.width) || circle[size], (style === null || style === void 0 ? void 0 : style.height) || circle[size], __assign({}, style));
}; });
var templateObject_1;
//# sourceMappingURL=image.js.map