var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { shared } from "../shared";
import { Theme } from "../../../../shared/theme";
var backgroundColor = function (props) { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.backgroundColor) || ((_d = (_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.palette) === null || _c === void 0 ? void 0 : _c.light) === null || _d === void 0 ? void 0 : _d.one) || Theme.palette.light.one; };
var color = function (props) { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.color) || ((_d = (_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.palette) === null || _c === void 0 ? void 0 : _c.main) === null || _d === void 0 ? void 0 : _d.one) || Theme.palette.main.one; };
export var Secondary = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  background-color: transparent;\n  border-color: ", ";\n  color: ", ";\n\n  &:hover:not([disabled]) {\n    background-color: ", ";\n    color: ", ";\n  }\n"], ["\n  ", ";\n  background-color: transparent;\n  border-color: ", ";\n  color: ", ";\n\n  &:hover:not([disabled]) {\n    background-color: ", ";\n    color: ", ";\n  }\n"])), shared, function (props) { return color(props); }, function (props) { return color(props); }, function (props) { return color(props) + " !important"; }, function (props) { return backgroundColor(props) + " !important"; });
var templateObject_1;
//# sourceMappingURL=secondary.js.map