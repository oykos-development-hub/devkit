var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { shared } from "../shared";
import { Theme } from "../../../../shared/theme";
import { Body1, Body2, Button, Caption, Error, H1, H2, H3, H4, H5, H6, Overline, Sub1, Sub2, } from "../../../typography/styles/variants";
var color = function (props) { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.color) || ((_d = (_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.palette) === null || _c === void 0 ? void 0 : _c.dark) === null || _d === void 0 ? void 0 : _d.two) || Theme.palette.dark.two; };
export var Tertiary = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  background-color: transparent;\n  border-color: transparent;\n  color: ", ";\n  padding: 0;\n\n  &:hover:not([disabled]) {\n    text-decoration: underline;\n  }\n\n  ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", " {\n    color: ", ";\n  }\n"], ["\n  ", ";\n  background-color: transparent;\n  border-color: transparent;\n  color: ", ";\n  padding: 0;\n\n  &:hover:not([disabled]) {\n    text-decoration: underline;\n  }\n\n  ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", " {\n    color: ", ";\n  }\n"])), shared, function (props) { return color(props); }, H1, H2, H3, H4, H5, H6, Sub1, Sub2, Body1, Body2, Button, Caption, Overline, Error, function (props) { return color(props); });
var templateObject_1;
//# sourceMappingURL=tertiary.js.map