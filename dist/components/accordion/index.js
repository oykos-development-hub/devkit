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
import React, { useRef, useState } from "react";
import { StyledMainWrapper as Filled } from "./styles/variants/filled";
import { StyledMainWrapper as Standard } from "./styles/variants/standard";
export var Wrapper = function (props) {
    var _a;
    var variant = (_a = props.variant) !== null && _a !== void 0 ? _a : "standard";
    if (variant === "filled")
        return React.createElement(Filled, __assign({}, props));
    else
        return React.createElement(Standard, __assign({}, props));
};
export var Accordion = function (_a) {
    var variant = _a.variant, collapsed = _a.collapsed, scrollHeight = _a.scrollHeight, props = __rest(_a, ["variant", "collapsed", "scrollHeight"]);
    var _b = useState(false), isCollapsed = _b[0], setIsCollapsed = _b[1];
    var _c = useState(0), height = _c[0], setHeight = _c[1];
    var contentEl = useRef(null);
    return (React.createElement(Wrapper, __assign({ variant: variant, collapsed: isCollapsed || collapsed, scrollHeight: height }, props),
        React.createElement("div", { id: "accordion-header", onClick: function () {
                setHeight(contentEl.current.scrollHeight);
                setIsCollapsed(!isCollapsed);
            } },
            React.createElement("div", null,
                props.iconLeft && React.createElement("div", { id: "accordion-icon-wrapper" }, props.iconLeft),
                React.createElement("p", null, props.title)),
            props.iconRight && React.createElement("div", { id: "arrow-wrapper" }, props.iconRight)),
        (props.contentText || props.contentElement) && (React.createElement("div", { id: "accordion-content", ref: contentEl }, !props.contentElement ? React.createElement("p", null, props.contentText) : props.contentElement))));
};
//# sourceMappingURL=index.js.map