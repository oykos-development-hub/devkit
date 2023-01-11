var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from "styled-components";
export var sharedPath = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  \"color\": ", ";\n  \"fill\": ", ";\n"], ["\n  \"color\": ", ";\n  \"fill\": ", ";\n"])), function (props) { var _a, _b; return props.color || ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.main.one) || "#7E8A96"; }, function (props) { var _a, _b; return props.fill || ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.main.one) || "#7E8A96"; });
export var sharedSvg = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\"width\": ", ";\n\"height\": ", ";\n  ", "\n"], ["\n\"width\": ", ";\n\"height\": ", ";\n  ", "\n"])), function (props) { return props.width || 24; }, function (props) { return props.height || props.width || 24; }, sharedPath);
var templateObject_1, templateObject_2;
//# sourceMappingURL=shared.js.map