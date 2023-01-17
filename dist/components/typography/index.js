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
    var Component;
    var componentProps = __assign({}, props);
    delete componentProps.content;
    switch (variant) {
        case "h1":
            Component = H1;
            break;
        case "h2":
            Component = H2;
            break;
        case "h3":
            Component = H3;
            break;
        case "h4":
            Component = H4;
            break;
        case "h5":
            Component = H5;
            break;
        case "h6":
            Component = H6;
            break;
        case "subtitle1":
            Component = Sub1;
            break;
        case "subtitle2":
            Component = Sub2;
            break;
        case "body1":
            Component = Body1;
            break;
        case "body2":
            Component = Body2;
            break;
        case "button":
            Component = Button;
            break;
        case "caption":
            Component = Caption;
            break;
        case "overline":
            Component = Overline;
            break;
        case "error":
            Component = Error;
            break;
        default:
            Component = Body1;
            break;
    }
    return (React.createElement(Component, __assign({}, componentProps), props.content));
};
//# sourceMappingURL=index.js.map