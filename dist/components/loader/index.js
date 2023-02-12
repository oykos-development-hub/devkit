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
import React, { useMemo } from "react";
import { One } from "./one";
import { Two } from "./two";
var resolveSecondaryValue = function (value) {
    if (!value)
        return "";
    var numericValue = parseFloat(value);
    var unitValue = value.replace(new RegExp(String(numericValue), "g"), "");
    return String(numericValue + 20) + unitValue;
};
export var Loader = function (props) {
    var _a;
    var variant = (_a = props.variant) !== null && _a !== void 0 ? _a : "one";
    var secondaryWidth = useMemo(function () { return resolveSecondaryValue(props.width); }, []);
    var secondaryHeight = useMemo(function () { return resolveSecondaryValue(props.height); }, []);
    if (variant === "one")
        return React.createElement(One, __assign({}, props, { secondaryWidth: secondaryWidth, secondaryHeight: secondaryHeight }));
    if (variant === "two")
        return React.createElement(Two, __assign({}, props, { secondaryWidth: secondaryWidth, secondaryHeight: secondaryHeight }));
    return React.createElement(One, __assign({}, props));
};
//# sourceMappingURL=index.js.map