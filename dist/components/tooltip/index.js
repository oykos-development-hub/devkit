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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { Typography } from "../typography";
import { StyledTooltip } from "./styles";
import { Positions } from "./types";
var Tooltip = function (_a) {
    var position = _a.position, content = _a.content, children = _a.children, title = _a.title, props = __rest(_a, ["position", "content", "children", "title"]);
    var tooltipPosition = Positions[position] || "bottom";
    return (React.createElement(StyledTooltip, __assign({}, props, { position: tooltipPosition, content: content }),
        children,
        React.createElement("div", { id: "tooltip-content" },
            title && React.createElement(Typography, { content: title, variant: "h6" }),
            React.createElement(Typography, { content: content, variant: "body1" }))));
};
export default Tooltip;
//# sourceMappingURL=index.js.map