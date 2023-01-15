var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { getColor, getBgColor, initialShadow } from "../shared";
export var StyledNotificationBoard = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n  display: flex;\n  align-content: center;\n  align-items: center;\n  border-radius: ", ";\n  padding: 0.75rem 1rem;\n  min-height: 3rem;\n  z-index: 999;\n"], ["\n  font-family: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n  display: flex;\n  align-content: center;\n  align-items: center;\n  border-radius: ", ";\n  padding: 0.75rem 1rem;\n  min-height: 3rem;\n  z-index: 999;\n"])), function (props) { var _a, _b; return props.fontFamily || ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.fontFamily) === null || _b === void 0 ? void 0 : _b.one) || "sans-serif"; }, getBgColor, getColor, function (props) { return (props.isSnackBar ? props.boxShadow || initialShadow : ""); }, function (props) { return props.borderRadius + "rem" || props.theme.borderRadius.md || "0.5rem"; });
var templateObject_1;
//# sourceMappingURL=style.js.map