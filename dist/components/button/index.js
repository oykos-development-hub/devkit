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
import { Primary } from "./styles/variants/primary";
import { Secondary } from "./styles/variants/secondary";
import { Tertiary } from "./styles/variants/tertiary";
export var StyledButton = function (props) {
    var _a;
    var variant = (_a = props.variant) !== null && _a !== void 0 ? _a : "primary";
    if (variant === "secondary")
        return (React.createElement(Secondary, __assign({}, props, { type: "button" })));
    if (variant === "tertiary")
        return (React.createElement(Tertiary, __assign({}, props, { type: "button" })));
    return (React.createElement(Primary, __assign({}, props, { type: "submit" })));
};
export var Button = function (props) {
    return (React.createElement(StyledButton, __assign({}, props), props.content));
};
//# sourceMappingURL=index.js.map