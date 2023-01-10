var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from "styled-components";
export var shared = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  display: block;\n  font-family: ", ";\n  margin: ", ";\n"], ["\n  color: ", ";\n  display: block;\n  font-family: ", ";\n  margin: ", ";\n"])), function (props) { var _a, _b, _c; return props.color || ((_c = (_b = (_a = props === null || props === void 0 ? void 0 : props.theme) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.dark) === null || _c === void 0 ? void 0 : _c.one) || "#000"; }, function (props) { var _a; return props.fontFamily || ((_a = props.theme) === null || _a === void 0 ? void 0 : _a.fontFamily.one) || "Rubik, sans-serif"; }, function (props) { return props.margin || "initial"; });
var templateObject_1;
//# sourceMappingURL=shared.js.map