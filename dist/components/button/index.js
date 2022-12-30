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
import { Primary } from "./variants/primary";
import { Secondary } from "./variants/secondary";
import { Tertiary } from "./variants/tertiary";
export var Button = function (props) {
    var _a;
    var variant = (_a = props.variant) !== null && _a !== void 0 ? _a : "primary";
    if (variant === "primary")
        return React.createElement(Primary, __assign({}, props));
    if (variant === "secondary")
        return React.createElement(Secondary, __assign({}, props));
    if (variant === "tertiary")
        return React.createElement(Tertiary, __assign({}, props));
    return React.createElement(Primary, __assign({}, props));
};
//# sourceMappingURL=index.js.map