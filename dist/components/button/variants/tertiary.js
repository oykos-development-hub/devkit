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
import React, { forwardRef } from "react";
import { StyledTertiaryButton } from "../styles/tertiary";
export var Tertiary = forwardRef(function (_a, ref) {
    var onClick = _a.onClick, iconPosition = _a.iconPosition, props = __rest(_a, ["onClick", "iconPosition"]);
    return (React.createElement(StyledTertiaryButton, __assign({ type: "reset" }, props, { onClick: function () { return (onClick ? onClick() : null); }, iconPosition: iconPosition || "left", ref: ref }),
        props.icon && iconPosition === "left" && React.createElement("span", null, props.icon),
        React.createElement("span", null, props.label),
        props.icon && iconPosition === "right" && React.createElement("span", null, props.icon)));
});
//# sourceMappingURL=tertiary.js.map