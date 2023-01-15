var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import CircleCheckIcon from "../icon/icons/CircleCheckIcon";
import DangerIcon from "../icon/icons/DangerIcon";
import XIcon from "../icon/icons/XIcon";
import { IconWrapper } from "./elements/icon-wraper";
import { getColor } from "./elements/shared";
import { AdditionalText } from "./elements/additional-text";
import { NotificationBoard } from "./elements/notification-board";
import { ColumnWrapper } from "./elements/column-wrapper";
import { ContentWrapper } from "./elements/content-wrapper";
export var Notification = function (props) {
    var variant = props.variant;
    var color = getColor(props);
    var renderIcon = function () {
        switch (variant) {
            case "success":
                return React.createElement(CircleCheckIcon, { color: props.leftIconColor || props.color, top: props.iconTop + "rem" || "1rem" });
            case "info":
            case "neutral":
            case "error":
                return (React.createElement(DangerIcon, { width: props.iconWidth || 20, color: props.leftIconColor || props.color, top: props.iconTop + "rem" || "1rem" }));
            default:
                return null;
        }
    };
    var content = function () { return (React.createElement(React.Fragment, null,
        React.createElement("p", { className: props.className }, props.message),
        props.closeIcon && (React.createElement(IconWrapper, { className: "right", color: color },
            React.createElement(XIcon, { width: props.iconWidth || 20, top: props.iconTop + "rem", color: props.closeIconColor || props.color, onClick: props.onClose, position: "relative" }))))); };
    var renderContent = function () { return (React.createElement(React.Fragment, null,
        React.createElement(ContentWrapper, __assign({}, props), content()),
        props.additionalText && React.createElement(AdditionalText, { additionalText: props.additionalText }),
        props.button && React.createElement("div", { className: "m-t-14 m-b-4" }, props.button))); };
    var renderChildren = function () { return (React.createElement(React.Fragment, null,
        React.createElement(IconWrapper, { className: "left" }, renderIcon()),
        React.createElement(ColumnWrapper, __assign({}, props), renderContent()))); };
    return React.createElement(NotificationBoard, __assign({}, props), renderChildren());
};
//# sourceMappingURL=index.js.map