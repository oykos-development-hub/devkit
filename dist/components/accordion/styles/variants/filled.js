var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { wrapperStyles, basicColor, collapsedColor, hoverColor } from "../shared";
export var StyledMainWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n\n  #accordion-header {\n    background-color: ", ";\n    border: none;\n    border-radius: ", ";\n\n    &:hover {\n      background-color: ", ";\n    }\n  }\n"], ["\n  ", "\n\n  #accordion-header {\n    background-color: ", ";\n    border: none;\n    border-radius: ", ";\n\n    &:hover {\n      background-color: ", ";\n    }\n  }\n"])), wrapperStyles, function (props) { return (!props.collapsed ? basicColor(props) : collapsedColor(props)); }, function (props) { var _a, _b; return props.borderRadius || ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.borderRadius) === null || _b === void 0 ? void 0 : _b.md) || "0em"; }, function (props) { return (!props.collapsed ? hoverColor(props) : collapsedColor(props)); });
var templateObject_1;
//# sourceMappingURL=filled.js.map