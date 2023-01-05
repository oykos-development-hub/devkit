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
import { Outlined } from "./variants/outlined";
import { Standard } from "./variants/standard";
export var Input = function (props) {
    var _a;
    var variant = (_a = props.variant) !== null && _a !== void 0 ? _a : "outlined";
    if (variant === "outlined")
        return React.createElement(Outlined, __assign({}, props));
    if (variant === "standard")
        return React.createElement(Standard, __assign({}, props));
    return React.createElement(Outlined, __assign({}, props));
};
//# sourceMappingURL=index.js.map