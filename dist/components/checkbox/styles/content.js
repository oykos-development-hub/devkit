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
export var Icon = styled.svg.attrs({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 12",
    fill: "none",
})(function (_a) {
    var disabled = _a.disabled, theme = _a.theme;
    var themeToUse = theme || Theme;
    var _b = themeToUse.palette, gray300 = _b.gray300, white = _b.white;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    fill: none;\n    stroke: ", ";\n    stroke-width: 1.6666;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n  "], ["\n    fill: none;\n    stroke: ", ";\n    stroke-width: 1.6666;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n  "])), disabled ? gray300 : white);
});
export var HiddenCheckbox = styled.input.attrs({ type: "checkbox" })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  width: 0.063rem;\n  height: 0.063rem;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n"], ["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  width: 0.063rem;\n  height: 0.063rem;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n"])));
export var Content = styled.div(function (_a) {
    var checked = _a.checked, disabled = _a.disabled, theme = _a.theme, size = _a.size, style = _a.style;
    var themeToUse = theme || Theme;
    var _b = themeToUse.palette, primary500 = _b.primary500, gray50 = _b.gray50, gray300 = _b.gray300;
    var borderRadius = {
        sm: "0.25rem",
        md: "0.375rem",
    };
    var widthHeight = {
        sm: "1rem",
        md: "1.25rem",
    };
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: inline-block;\n    width: ", ";\n    height: ", ";\n    background: ", ";\n    border: 1px solid ", ";\n    border-radius: ", ";\n    cursor: ", ";\n\n    ", ":focus + & {\n      box-shadow: ", ";\n    }\n\n    &:hover {\n      border: ", ";\n      box-shadow: ", ";\n    }\n\n    &[disabled] {\n      background: ", ";\n      border: 1px solid ", ";\n      border-radius: ", ";\n    }\n\n    ", " {\n      visibility: ", ";\n    }\n\n    ", "\n  "], ["\n    display: inline-block;\n    width: ", ";\n    height: ", ";\n    background: ", ";\n    border: 1px solid ", ";\n    border-radius: ", ";\n    cursor: ", ";\n\n    ", ":focus + & {\n      box-shadow: ", ";\n    }\n\n    &:hover {\n      border: ", ";\n      box-shadow: ", ";\n    }\n\n    &[disabled] {\n      background: ", ";\n      border: 1px solid ", ";\n      border-radius: ", ";\n    }\n\n    ", " {\n      visibility: ", ";\n    }\n\n    ", "\n  "])), (style === null || style === void 0 ? void 0 : style.width) || widthHeight[size], (style === null || style === void 0 ? void 0 : style.height) || widthHeight[size], checked ? primary500 : gray50, primary500, (style === null || style === void 0 ? void 0 : style.borderRadius) || borderRadius[size], disabled ? "auto" : "pointer", HiddenCheckbox, disabled ? "none" : "0 0 0 0.063rem #f4ebff", disabled ? "1px solid #e0e0e0" : "1px solid " + primary500, disabled ? "none" : "0 0 0 0.25rem #f4ebff", gray50, gray300, (style === null || style === void 0 ? void 0 : style.borderRadius) || borderRadius[size], Icon, checked ? "visible" : "hidden", __assign({}, style));
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=content.js.map