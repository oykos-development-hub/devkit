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
import { H6, Body1, Body2 } from "../../typography/styles/variants";
export var ModalBox = styled.div(function () { return function (_a) {
    var theme = _a.theme, variant = _a.variant, style = _a.style;
    var _b = theme.palette, white = _b.white, black = _b.black;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    width: fit-content;\n    min-width: 25%;\n    padding: 1.5em;\n    box-shadow: 0px 4px 8px -2px rgba(33, 33, 33, 0.07), 0px 12px 16px -4px rgba(33, 33, 33, 0.1);\n    border-radius: 0.5em;\n\n    ", ", ", ", ", " {\n      color: ", ";\n    }\n\n    ", "\n  "], ["\n    background-color: ", ";\n    width: fit-content;\n    min-width: 25%;\n    padding: 1.5em;\n    box-shadow: 0px 4px 8px -2px rgba(33, 33, 33, 0.07), 0px 12px 16px -4px rgba(33, 33, 33, 0.1);\n    border-radius: 0.5em;\n\n    ", ", ", ", ", " {\n      color: ", ";\n    }\n\n    ", "\n  "])), variant === "dark" ? black : white, H6, Body1, Body2, variant === "dark" ? white : black, __assign({}, style));
}; });
var templateObject_1;
//# sourceMappingURL=modal.js.map