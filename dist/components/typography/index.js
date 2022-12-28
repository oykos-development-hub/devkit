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
import { StyledTypographyBody1, StyledTypographyBody2, StyledTypographyButton, StyledTypographyCaption, StyledTypographyH1, StyledTypographyH2, StyledTypographyH3, StyledTypographyH4, StyledTypographyH5, StyledTypographyH6, StyledTypographyOverline, StyledTypographySub1, StyledTypographySub2, StyledTypographyError } from "./styles";
export var Typography = function (props) {
    var _a;
    var variant = (_a = props.variant) !== null && _a !== void 0 ? _a : "p";
    if (variant === "h1")
        return React.createElement(StyledTypographyH1, __assign({}, props));
    if (variant === "h2")
        return React.createElement(StyledTypographyH2, __assign({}, props));
    if (variant === "h3")
        return React.createElement(StyledTypographyH3, __assign({}, props));
    if (variant === "h4")
        return React.createElement(StyledTypographyH4, __assign({}, props));
    if (variant === "h5")
        return React.createElement(StyledTypographyH5, __assign({}, props));
    if (variant === "h6")
        return React.createElement(StyledTypographyH6, __assign({}, props));
    if (variant === "subtitle1")
        return React.createElement(StyledTypographySub1, __assign({}, props));
    if (variant === "subtitle2")
        return React.createElement(StyledTypographySub2, __assign({}, props));
    if (variant === "body1")
        return React.createElement(StyledTypographyBody1, __assign({}, props));
    if (variant === "body2")
        return React.createElement(StyledTypographyBody2, __assign({}, props));
    if (variant === "button")
        return React.createElement(StyledTypographyButton, __assign({}, props));
    if (variant === "caption")
        return React.createElement(StyledTypographyCaption, __assign({}, props));
    if (variant === "overline")
        return React.createElement(StyledTypographyOverline, __assign({}, props));
    if (variant === "error")
        return React.createElement(StyledTypographyError, __assign({}, props));
    return React.createElement(StyledTypographyH1, __assign({ as: "p" }, props));
};
//# sourceMappingURL=index.js.map