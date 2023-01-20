var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { shared, disabledColor, secondaryColor } from "./shared";
export var StyledSecondaryButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  background-color: transparent;\n  border-color: ", ";\n  color: ", ";\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n  &:disabled {\n    background-color: transparent;\n    color: ", ";\n    border-color: ", ";\n  }\n"], ["\n  ", ";\n  background-color: transparent;\n  border-color: ", ";\n  color: ", ";\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n  &:disabled {\n    background-color: transparent;\n    color: ", ";\n    border-color: ", ";\n  }\n"])), shared, function (props) { return secondaryColor(props); }, function (props) { return secondaryColor(props); }, function (props) { return secondaryColor(props); }, function (props) { var _a, _b, _c; return ((_c = (_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.light) === null || _c === void 0 ? void 0 : _c.one) || "white"; }, function (props) { return disabledColor(props); }, function (props) { return disabledColor(props); });
var templateObject_1;
//# sourceMappingURL=secondary.js.map