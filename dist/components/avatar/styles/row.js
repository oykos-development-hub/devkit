var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { AvatarVariants } from "../types";
export var Row = styled.div(function () { return function (_a) {
    var variant = _a.variant;
    var margin = function (variantName) { return (variantName === AvatarVariants.circle ? "auto" : "unset"); };
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin: ", ";\n    flex: none;\n    flex-direction: row;\n    order: 0;\n    align-self: stretch;\n    flex-grow: 0;\n  "], ["\n    margin: ", ";\n    flex: none;\n    flex-direction: row;\n    order: 0;\n    align-self: stretch;\n    flex-grow: 0;\n  "])), margin(variant));
}; });
var templateObject_1;
//# sourceMappingURL=row.js.map