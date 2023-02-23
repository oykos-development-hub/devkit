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
import { BodyLarge, BodyMedium, BodySmall, Caption, Code, H1, H2, H3, H4, H5, H6, HelperText, LinkLarge, LinkMedium, LinkSmall, } from "./styles/variants";
export var Typography = function (props) {
    var _a;
    var variant = (_a = props.variant) !== null && _a !== void 0 ? _a : TypographyVariants.bodyMedium;
    switch (variant) {
        case "h1":
            return React.createElement(H1, __assign({}, props), props.content);
        case "h2":
            return React.createElement(H2, __assign({}, props), props.content);
        case "h3":
            return React.createElement(H3, __assign({}, props), props.content);
        case "h4":
            return React.createElement(H4, __assign({}, props), props.content);
        case "h5":
            return React.createElement(H5, __assign({}, props), props.content);
        case "h6":
            return React.createElement(H6, __assign({}, props), props.content);
        case "bodyLarge":
            return React.createElement(BodyLarge, __assign({}, props), props.content);
        case "bodyMedium":
            return React.createElement(BodyMedium, __assign({}, props), props.content);
        case "bodySmall":
            return React.createElement(BodySmall, __assign({}, props), props.content);
        case "linkLarge":
            return React.createElement(LinkLarge, __assign({}, props), props.content);
        case "linkMedium":
            return React.createElement(LinkMedium, __assign({}, props), props.content);
        case "linkSmall":
            return React.createElement(LinkSmall, __assign({}, props), props.content);
        case "caption":
            return React.createElement(Caption, __assign({}, props), props.content);
        case "helperText":
            return React.createElement(HelperText, __assign({}, props), props.content);
        case "code":
            return React.createElement(Code, __assign({}, props), props.content);
        default:
            return React.createElement(BodyMedium, __assign({}, props), props.content);
    }
};
//# sourceMappingURL=index.js.map