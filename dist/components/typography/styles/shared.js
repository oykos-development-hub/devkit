var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from "styled-components";
import { Theme } from "../../../shared/theme";
export var shared = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  display: block;\n  font-family: ", ";\n"], ["\n  color: ", ";\n  display: block;\n  font-family: ", ";\n"])), function (props) { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.color) || ((_c = (_b = props === null || props === void 0 ? void 0 : props.theme) === null || _b === void 0 ? void 0 : _b.palette) === null || _c === void 0 ? void 0 : _c.gray900) || ((_d = Theme.palette) === null || _d === void 0 ? void 0 : _d.gray900); }, function (props) { var _a, _b, _c, _d; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.fontFamily) || ((_c = (_b = props.theme) === null || _b === void 0 ? void 0 : _b.fontFamily) === null || _c === void 0 ? void 0 : _c.one) || ((_d = Theme.fontFamily) === null || _d === void 0 ? void 0 : _d.one); });
export var fontWeight = function (props) { return props.fontWeight || Theme.fontWeight.regular; };
var templateObject_1;
//# sourceMappingURL=shared.js.map