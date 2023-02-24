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
import { BodyMedium, H6 } from "../../typography/styles/variants";
import { Variants } from "../types";
import { arrowPosition } from "./positions/arrowPositions";
export var StyledTooltip = styled.div(function (_a) {
    var style = _a.style, position = _a.position, arrow = _a.arrow, variant = _a.variant, theme = _a.theme, title = _a.title;
    var _b = theme.palette, white = _b.white, primary500 = _b.primary500, gray900 = _b.gray900;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    min-width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: ", ";\n    gap: 0.25em;\n    visibility: hidden;\n    color: ", ";\n    background-color: ", ";\n    border-radius: 0.5em;\n    white-space: nowrap;\n    z-index: 1;\n    padding: 0.5em 0.75em;\n    position: absolute;\n    box-shadow: 0px 8px 14px 3px rgba(0, 0, 0, 0.1);\n\n    &::after {\n      background-color: ", ";\n    }\n\n    & ", ", ", " {\n      color: ", ";\n      white-space: normal;\n      font-family: \"Inter\";\n    }\n\n    ", "\n\n    ", "\n  "], ["\n    min-width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: ", ";\n    gap: 0.25em;\n    visibility: hidden;\n    color: ", ";\n    background-color: ", ";\n    border-radius: 0.5em;\n    white-space: nowrap;\n    z-index: 1;\n    padding: 0.5em 0.75em;\n    position: absolute;\n    box-shadow: 0px 8px 14px 3px rgba(0, 0, 0, 0.1);\n\n    &::after {\n      background-color: ", ";\n    }\n\n    & ", ", ", " {\n      color: ", ";\n      white-space: normal;\n      font-family: \"Inter\";\n    }\n\n    ", "\n\n    ", "\n  "])), title ? "flex-start" : "center", variant === Variants["standard"] ? gray900 : white, variant === Variants["standard"] ? white : primary500, (style === null || style === void 0 ? void 0 : style.backgroundColor) || (variant === Variants["standard"] ? white : primary500), BodyMedium, H6, (style === null || style === void 0 ? void 0 : style.color) || (variant === Variants["standard"] ? gray900 : white), arrowPosition(position, arrow), __assign({}, style));
});
var templateObject_1;
//# sourceMappingURL=tooltip.js.map