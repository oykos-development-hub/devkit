var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import React from "react";
import { CircleCheckIcon, DangerIcon } from "../../icon";
var StyledIconContent = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-self: stretch;\n  position: relative;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 0;\n  gap: 1rem;\n"], ["\n  display: flex;\n  align-self: stretch;\n  position: relative;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 0;\n  gap: 1rem;\n"])));
export var LeftIconContent = function (_a) {
    var variant = _a.variant;
    var renderIcon = function () {
        switch (variant) {
            case "success":
                return React.createElement(CircleCheckIcon, null);
            case "info":
            case "primary":
            case "error":
                return React.createElement(DangerIcon, null);
            default:
                return null;
        }
    };
    return React.createElement(StyledIconContent, null, renderIcon());
};
var templateObject_1;
//# sourceMappingURL=icon-content.js.map