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
import { AvatarVariants } from "../types";
export var Image = styled.img(function () { return function (_a) {
    var variant = _a.variant, size = _a.size, style = _a.style;
    var circle = {
        xs: rem("24px"),
        sm: rem("32px"),
        md: rem("40px"),
        lg: rem("48px"),
        xl: rem("56px"),
    };
    switch (variant) {
        case AvatarVariants.square:
            return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        width: ", ";\n        height: ", ";\n        object-fit: cover;\n\n        ", "\n      "], ["\n        width: ", ";\n        height: ", ";\n        object-fit: cover;\n\n        ", "\n      "])), (style === null || style === void 0 ? void 0 : style.width) || rem("160px"), (style === null || style === void 0 ? void 0 : style.height) || rem("220px"), __assign({}, style));
        case AvatarVariants.circle:
            return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: ", ";\n        height: ", ";\n        object-fit: cover;\n        border-radius: 50%;\n\n        &:hover {\n          cursor: pointer;\n        }\n\n        &:active,\n        &:focus-within {\n          border: ", " solid #e0e7ff;\n        }\n\n        ", "\n      "], ["\n        width: ", ";\n        height: ", ";\n        object-fit: cover;\n        border-radius: 50%;\n\n        &:hover {\n          cursor: pointer;\n        }\n\n        &:active,\n        &:focus-within {\n          border: ", " solid #e0e7ff;\n        }\n\n        ", "\n      "])), (style === null || style === void 0 ? void 0 : style.width) || circle[size], (style === null || style === void 0 ? void 0 : style.height) || circle[size], rem("4px"), __assign({}, style));
        default:
            return AvatarVariants.square;
    }
}; });
var templateObject_1, templateObject_2;
//# sourceMappingURL=image.js.map