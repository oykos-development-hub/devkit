var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { errorColor, confirmedColor, focusColor } from "./shared/colors";
import { wrapperStyles } from "./shared/wrapper-styles";
export var StyledMainWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n\n  & input, & textarea {\n    height: ", ";\n    padding-left: ", ";\n    padding-right: ", ";\n    border-width: ", ";\n    border-radius: ", ";\n\n    &:focus {\n      border-width: ", ";\n      border-color: ", ";\n    }\n  }\n"], ["\n  ", "\n\n  & input, & textarea {\n    height: ", ";\n    padding-left: ", ";\n    padding-right: ", ";\n    border-width: ", ";\n    border-radius: ", ";\n\n    &:focus {\n      border-width: ", ";\n      border-color: ", ";\n    }\n  }\n"])), wrapperStyles, function (props) { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.height) || (props.textarea ? "6em" : "3em"); }, function (props) { return (!props.textarea ? (props.iconLeft ? "3em" : "1em") : "1em"); }, function (props) { return (!props.textarea ? (props.iconLeft ? "3em" : "1em") : "1em"); }, function (props) { var _a, _b; return ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.borderWidth) === null || _b === void 0 ? void 0 : _b.xs) || "1px"; }, function (props) { var _a, _b, _c; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.borderRadius) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.borderRadius) === null || _c === void 0 ? void 0 : _c.md) || "0.5em"; }, function (props) { var _a, _b; return ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.borderWidth) === null || _b === void 0 ? void 0 : _b.sm) || "2px"; }, function (props) {
    return props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : focusColor(props);
});
var templateObject_1;
//# sourceMappingURL=outlined.js.map