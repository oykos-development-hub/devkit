var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import React from "react";
import { CircleCheckIcon, DangerIcon, XIcon } from "../../icon";
var StyledIconContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-self: flex-start;\n  position: relative;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 0;\n  gap: 1rem;\n"], ["\n  display: flex;\n  align-self: flex-start;\n  position: relative;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 0;\n  gap: 1rem;\n"])));
export var IconContainer = function (_a) {
    var variant = _a.variant, closeIcon = _a.closeIcon, onClose = _a.onClose, children = _a.children;
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
    return (React.createElement(StyledIconContainer, null,
        renderIcon(),
        children,
        closeIcon && React.createElement(XIcon, { onClick: onClose })));
};
var templateObject_1;
//# sourceMappingURL=icon-container.js.map