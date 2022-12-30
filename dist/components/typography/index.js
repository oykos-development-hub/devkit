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
import { Body1, Body2, Button, Caption, Error, H1, H2, H3, H4, H5, H6, Overline, Sub1, Sub2 } from "./styles";
export var Typography = function (props) {
    var _a;
    var variant = (_a = props.variant) !== null && _a !== void 0 ? _a : "p";
    switch (variant) {
        case "h1":
            return React.createElement(H1, __assign({}, props));
            break;
        case "h2":
            return React.createElement(H2, __assign({}, props));
            break;
        case "h3":
            return React.createElement(H3, __assign({}, props));
            break;
        case "h4":
            return React.createElement(H4, __assign({}, props));
            break;
        case "h5":
            return React.createElement(H5, __assign({}, props));
            break;
        case "h6":
            return React.createElement(H6, __assign({}, props));
            break;
        case "subtitle1":
            return React.createElement(Sub1, __assign({}, props));
            break;
        case "subtitle2":
            return React.createElement(Sub2, __assign({}, props));
            break;
        case "body1":
            return React.createElement(Body1, __assign({}, props));
            break;
        case "body2":
            return React.createElement(Body2, __assign({}, props));
            break;
        case "button":
            return React.createElement(Button, __assign({}, props));
            break;
        case "caption":
            return React.createElement(Caption, __assign({}, props));
            break;
        case "overline":
            return React.createElement(Overline, __assign({}, props));
            break;
        case "error":
            return React.createElement(Error, __assign({}, props));
            break;
        default:
            return React.createElement(H1, __assign({ as: "p" }, props));
    }
};
//# sourceMappingURL=index.js.map