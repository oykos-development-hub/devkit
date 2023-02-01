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
import { BodyLarge, BodyLargeSemiBold, BodyMedium, BodyMediumSemiBold, BodySmall, BodySmallSemiBold, Caption, Code, H1, H2, H3, H4, H5, H6, HelperText, LinkLarge, LinkLargeSemiBold, LinkMedium, LinkMediumSemiBold, LinkSmall, LinkSmallSemiBold, } from "./styles/variants";
export var Typography = function (props) {
    var _a;
    var variant = (_a = props.variant) !== null && _a !== void 0 ? _a : TypographyVariants.bodyMedium;
    switch (variant) {
        case "h1":
            return React.createElement(H1, __assign({}, props));
        case "h2":
            return React.createElement(H2, __assign({}, props));
        case "h3":
            return React.createElement(H3, __assign({}, props));
        case "h4":
            return React.createElement(H4, __assign({}, props));
        case "h5":
            return React.createElement(H5, __assign({}, props));
        case "h6":
            return React.createElement(H6, __assign({}, props));
        case "bodyLarge":
            return React.createElement(BodyLarge, __assign({}, props));
        case "bodyMedium":
            return React.createElement(BodyMedium, __assign({}, props));
        case "bodySmall":
            return React.createElement(BodySmall, __assign({}, props));
        case "bodyLargeSemiBold":
            return React.createElement(BodyLargeSemiBold, __assign({}, props));
        case "bodyMediumSemiBold":
            return React.createElement(BodyMediumSemiBold, __assign({}, props));
        case "bodySmallSemiBold":
            return React.createElement(BodySmallSemiBold, __assign({}, props));
        case "linkLarge":
            return React.createElement(LinkLarge, __assign({}, props));
        case "linkMedium":
            return React.createElement(LinkMedium, __assign({}, props));
        case "linkSmall":
            return React.createElement(LinkSmall, __assign({}, props));
        case "linkLargeSemiBold":
            return React.createElement(LinkLargeSemiBold, __assign({}, props));
        case "linkMediumSemiBold":
            return React.createElement(LinkMediumSemiBold, __assign({}, props));
        case "linkSmallSemiBold":
            return React.createElement(LinkSmallSemiBold, __assign({}, props));
        case "caption":
            return React.createElement(Caption, __assign({}, props));
        case "helperText":
            return React.createElement(HelperText, __assign({}, props));
        case "code":
            return React.createElement(Code, __assign({}, props));
        default:
            return React.createElement(H1, __assign({}, props));
    }
};
//# sourceMappingURL=index.js.map