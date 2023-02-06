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
import { AlertVariants } from "../types";
import React from "react";
import { LeftIconContent } from "./icon-content";
import { Typography } from "../../typography";
import styled, { css } from "styled-components";
var StyledContent = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  order: 0;\n  flex-direction: row;\n  padding: 0;\n  gap: 1rem;\n"], ["\n  display: flex;\n  order: 0;\n  flex-direction: row;\n  padding: 0;\n  gap: 1rem;\n"])));
export var Content = styled.div(function () { return function (_a) {
    var style = _a.style;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    padding: 0;\n    gap: 1rem;\n\n    ", "\n  "], ["\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    padding: 0;\n    gap: 1rem;\n\n    ", "\n  "])), __assign({}, style));
}; });
export var LeftContent = function (_a) {
    var content = _a.content, _b = _a.variant, variant = _b === void 0 ? AlertVariants.success : _b, size = _a.size, style = _a.style, theme = _a.theme;
    return (React.createElement(StyledContent, null,
        React.createElement(LeftIconContent, { variant: variant, size: size }),
        React.createElement(Typography, { variant: "h6", content: content, theme: theme, style: style })));
};
export var RightContent = styled.div(function () { return function (_a) {
    var style = _a.style;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    padding: 0;\n    gap: 1rem;\n\n    & svg:hover {\n      cursor: pointer;\n    }\n\n    ", "\n  "], ["\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    padding: 0;\n    gap: 1rem;\n\n    & svg:hover {\n      cursor: pointer;\n    }\n\n    ", "\n  "])), __assign({}, style));
}; });
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=content.js.map