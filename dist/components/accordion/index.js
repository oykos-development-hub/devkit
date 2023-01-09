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
import { Filled } from "./variants/filled";
import { Standard } from "./variants/standard";
export var Accordion = function (props) {
    var _a;
    var variant = (_a = props.variant) !== null && _a !== void 0 ? _a : "standard";
    if (variant === "standard")
        return React.createElement(Standard, __assign({}, props));
    if (variant === "filled")
        return React.createElement(Filled, __assign({}, props));
    return React.createElement(Standard, __assign({}, props));
};
//# sourceMappingURL=index.js.map