var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { rem } from "polished";
import { AvatarVariants } from "../types";
export var Flex = styled.div(function () { return function (_a) {
    var variant = _a.variant;
    var gap = function (variantName) { return (variantName === AvatarVariants.square ? rem("6px") : "0"); };
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    gap: ", ";\n  "], ["\n    display: flex;\n    align-items: center;\n    gap: ", ";\n  "])), gap(variant));
}; });
var templateObject_1;
//# sourceMappingURL=flex.js.map