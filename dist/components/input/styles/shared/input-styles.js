var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from "styled-components";
import { errorColor, basicColor, hoverColor, focusColor } from "./colors";
var defaultHeight = {
    standard: "2.5em",
    outlined: "3em",
};
var paddingLeft = {
    standard: function (props) { return (!props.textarea ? (props.iconLeft ? "2.25em" : "0em") : "0em"); },
    outlined: function (props) { return (!props.textarea ? (props.iconLeft ? "3em" : "1em") : "1em"); },
};
var paddingRight = {
    standard: function (props) { return (!props.textarea ? (props.iconRight ? "2.25em" : "0em") : "0em"); },
    outlined: function (props) { return (!props.textarea ? (props.iconRight ? "3em" : "1em") : "1em"); },
};
var borderWidth = {
    standard: function (props) { var _a, _b; return "0 0 ".concat(((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.borderWidth) === null || _b === void 0 ? void 0 : _b.xs) || "1px", " 0"); },
    outlined: function (props) { var _a, _b; return ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.borderWidth) === null || _b === void 0 ? void 0 : _b.xs) || "1px"; },
};
var focusBorderWidth = {
    standard: borderWidth.standard,
    outlined: function (props) { var _a, _b; return ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.borderWidth) === null || _b === void 0 ? void 0 : _b.sm) || "2px"; },
};
var focusBorderColor = {
    standard: function (props) { return (props.error ? errorColor(props) : hoverColor(props)); },
    outlined: function (props) { return (props.error ? errorColor(props) : focusColor(props)); },
};
var borderRadius = {
    standard: 0,
    outlined: function (props) { var _a, _b; return props.borderRadius || ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.borderRadius) === null || _b === void 0 ? void 0 : _b.md) || "0.5em"; },
};
export var inputStyles = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: ", ";\n  min-height: 2em;\n  display: flex;\n  box-sizing: border-box;\n  padding: 0.5em 0em;\n  padding-left: ", ";\n  padding-right: ", ";\n  border-style: solid;\n  border-color: ", ";\n  border-width: ", ";\n  border-radius: ", ";\n  outline: none;\n\n  &:hover {\n    border-color: ", ";\n  }\n  &:focus {\n    border-color: ", ";\n    border-width: ", ";\n  }\n  &:disabled {\n    border-color: ", ";\n    color: ", ";\n    background-color: transparent;\n\n    &::placeholder {\n      color: ", ";\n    }\n  }\n"], ["\n  width: 100%;\n  height: ", ";\n  min-height: 2em;\n  display: flex;\n  box-sizing: border-box;\n  padding: 0.5em 0em;\n  padding-left: ", ";\n  padding-right: ", ";\n  border-style: solid;\n  border-color: ", ";\n  border-width: ", ";\n  border-radius: ", ";\n  outline: none;\n\n  &:hover {\n    border-color: ", ";\n  }\n  &:focus {\n    border-color: ", ";\n    border-width: ", ";\n  }\n  &:disabled {\n    border-color: ", ";\n    color: ", ";\n    background-color: transparent;\n\n    &::placeholder {\n      color: ", ";\n    }\n  }\n"])), function (props) { return props.height || (props.textarea ? "6em" : defaultHeight[props.variant]); }, function (props) { return paddingLeft[props.variant]; }, function (props) { return paddingRight[props.variant]; }, function (props) { return (props.error ? errorColor(props) : basicColor(props)); }, function (props) { return borderWidth[props.variant]; }, function (props) { return borderRadius[props.variant]; }, function (props) { return (props.error ? errorColor(props) : hoverColor(props)); }, function (props) { return focusBorderColor[props.variant]; }, function (props) { return focusBorderWidth[props.variant]; }, function (props) { return basicColor(props); }, function (props) { return basicColor(props); }, function (props) { return basicColor(props); });
var templateObject_1;
//# sourceMappingURL=input-styles.js.map