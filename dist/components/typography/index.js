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
import { TypographyVariants } from "./types";
import { Body1, Body2, Button, Caption, Error, H1, H2, H3, H4, H5, H6, Overline, Sub1, Sub2 } from "./styles/variants";
export var Typography = function (props) {
    var _a;
    var variant = (_a = props.variant) !== null && _a !== void 0 ? _a : TypographyVariants.body2;
    switch (variant) {
        case "h1":
            return (React.createElement(H1, __assign({}, props)));
        case "h2":
            return (React.createElement(H2, __assign({}, props)));
        case "h3":
            return (React.createElement(H3, __assign({}, props)));
        case "h4":
            return (React.createElement(H4, __assign({}, props)));
        case "h5":
            return (React.createElement(H5, __assign({}, props)));
        case "h6":
            return (React.createElement(H6, __assign({}, props)));
        case "subtitle1":
            return (React.createElement(Sub1, __assign({}, props)));
        case "subtitle2":
            return (React.createElement(Sub2, __assign({}, props)));
        case "body1":
            return (React.createElement(Body1, __assign({}, props)));
        case "body2":
            return (React.createElement(Body2, __assign({}, props)));
        case "button":
            return (React.createElement(Button, __assign({}, props)));
        case "caption":
            return (React.createElement(Caption, __assign({}, props)));
        case "overline":
            return (React.createElement(Overline, __assign({}, props)));
        case "error":
            return (React.createElement(Error, __assign({}, props)));
        default:
            return (React.createElement(Body1, __assign({}, props)));
    }
};
//# sourceMappingURL=index.js.map