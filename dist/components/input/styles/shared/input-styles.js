var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from "styled-components";
import { errorColor, basicColor, hoverColor, confirmedColor } from "./colors";
export var inputStyles = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: ", ";\n  min-height: 2em;\n  display: flex;\n  box-sizing: border-box;\n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n  padding-left: ", ";\n  padding-right: ", ";\n  border-style: solid;\n  border-color: ", ";\n  border-width: ", ";\n  outline: none;\n  color: ", ";\n\n  &:hover {\n    border-color: ", ";\n  }\n\n  &:focus {\n    border-color: ", ";\n  }\n\n  &:disabled {\n    border-color: ", ";\n    color: ", ";\n    background-color: transparent;\n\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  &::placeholder {\n    color: ", ";\n  }\n"], ["\n  width: 100%;\n  height: ", ";\n  min-height: 2em;\n  display: flex;\n  box-sizing: border-box;\n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n  padding-left: ", ";\n  padding-right: ", ";\n  border-style: solid;\n  border-color: ", ";\n  border-width: ", ";\n  outline: none;\n  color: ", ";\n\n  &:hover {\n    border-color: ", ";\n  }\n\n  &:focus {\n    border-color: ", ";\n  }\n\n  &:disabled {\n    border-color: ", ";\n    color: ", ";\n    background-color: transparent;\n\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  &::placeholder {\n    color: ", ";\n  }\n"])), function (props) { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.height) || (props.textarea ? "6em" : "2.5em"); }, function (props) { return (!props.textarea ? (props.iconLeft ? "2.25em" : "0em") : "0em"); }, function (props) { return (!props.textarea ? (props.iconRight ? "2.25em" : "0em") : "0em"); }, function (props) {
    return props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : basicColor(props);
}, function (props) { var _a, _b; return "0 0 ".concat(((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.borderWidth) === null || _b === void 0 ? void 0 : _b.xs) || "1px", " 0"); }, function (props) { return (props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : basicColor(props)); }, function (props) {
    return props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : hoverColor(props);
}, function (props) {
    return props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : hoverColor(props);
}, function (props) { return basicColor(props); }, function (props) { return basicColor(props); }, function (props) { return basicColor(props); }, function (props) {
    return props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : basicColor(props);
});
var templateObject_1;
//# sourceMappingURL=input-styles.js.map