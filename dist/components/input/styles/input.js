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
var shared = function (_a) {
    var _b, _c;
    var style = _a.style, theme = _a.theme, error = _a.error;
    var _d = theme.palette, gray400 = _d.gray400, gray600 = _d.gray600, error200 = _d.error200, primary200 = _d.primary200, white = _d.white;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    border-radius: ", ";\n    border: ", ";\n    box-sizing: border-box;\n    outline: none;\n\n    &:focus {\n      border-color: ", ";\n      box-shadow: ", ";\n    }\n\n    &[disabled] {\n      color: ", ";\n      background-color: ", ";\n    }\n\n    &::placeholder {\n      color: ", ";\n      font-size: 14px;\n    }\n\n    ", "\n  "], ["\n    width: 100%;\n    border-radius: ", ";\n    border: ", ";\n    box-sizing: border-box;\n    outline: none;\n\n    &:focus {\n      border-color: ", ";\n      box-shadow: ", ";\n    }\n\n    &[disabled] {\n      color: ", ";\n      background-color: ", ";\n    }\n\n    &::placeholder {\n      color: ", ";\n      font-size: 14px;\n    }\n\n    ", "\n  "])), ((_b = theme.borderRadius) === null || _b === void 0 ? void 0 : _b.lg) || "0.5em", "".concat(((_c = theme.borderWidth) === null || _c === void 0 ? void 0 : _c.xs) || "1px", " solid ").concat(error ? error200 : gray400), error ? error200 : primary200, (style === null || style === void 0 ? void 0 : style.boxShadow) || "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff", gray600, white, gray600, __assign({}, style));
};
export var StyledInput = styled.input(function (_a) {
    var style = _a.style, theme = _a.theme, error = _a.error, maxLength = _a.maxLength;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n    text-align: ", ";\n    height: 3em;\n  "], ["\n    ", "\n    text-align: ", ";\n    height: 3em;\n  "])), shared({ style: style, theme: theme, error: error, maxLength: maxLength }), maxLength === 1 ? "center" : "left");
});
export var Textarea = styled.textarea(function (_a) {
    var style = _a.style, theme = _a.theme, error = _a.error;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    ", "\n    resize: none;\n    height: 6em;\n  "], ["\n    ", "\n    resize: none;\n    height: 6em;\n  "])), shared({ style: style, theme: theme, error: error }));
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=input.js.map