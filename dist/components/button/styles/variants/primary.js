var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { shared } from "../shared";
import { Theme } from "../../../../shared/theme";
import { Body1, Body2, Button, Caption, Error, H1, H2, H3, H4, H5, H6, Overline, Sub1, Sub2 } from "../../../typography/styles/variants";
var backgroundColor = function (props) { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.backgroundColor) || ((_d = (_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.palette) === null || _c === void 0 ? void 0 : _c.info) === null || _d === void 0 ? void 0 : _d.one) || Theme.palette.info.one; };
var borderColor = function (props) { var _a, _b, _c, _d, _e; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.borderColor) || ((_b = props.style) === null || _b === void 0 ? void 0 : _b.backgroundColor) || ((_e = (_d = (_c = props.theme) === null || _c === void 0 ? void 0 : _c.palette) === null || _d === void 0 ? void 0 : _d.info) === null || _e === void 0 ? void 0 : _e.one) || Theme.palette.info.one; };
var color = function (props) { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.color) || ((_d = (_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.palette) === null || _c === void 0 ? void 0 : _c.light) === null || _d === void 0 ? void 0 : _d.one) || Theme.palette.light.one; };
export var Primary = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  background-color: ", ";\n  border-color: ", ";\n  color: ", ";\n\n  &:hover:not([disabled]) {\n    background-color: transparent !important;\n    color: ", ";\n    \n    ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", " {\n      color: ", ";\n    }\n  }\n  \n  ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", " {\n    color: ", ";\n  }\n"], ["\n  ", ";\n  background-color: ", ";\n  border-color: ", ";\n  color: ", ";\n\n  &:hover:not([disabled]) {\n    background-color: transparent !important;\n    color: ", ";\n    \n    ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", " {\n      color: ", ";\n    }\n  }\n  \n  ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", " {\n    color: ", ";\n  }\n"])), shared, function (props) { return backgroundColor(props); }, function (props) { return borderColor(props); }, function (props) { return color(props); }, function (props) { return backgroundColor(props); }, H1, H2, H3, H4, H5, H6, Sub1, Sub2, Body1, Body2, Button, Caption, Overline, Error, function (props) { return backgroundColor(props); }, H1, H2, H3, H4, H5, H6, Sub1, Sub2, Body1, Body2, Button, Caption, Overline, Error, function (props) { return color(props); });
var templateObject_1;
//# sourceMappingURL=primary.js.map