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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { forwardRef } from "react";
import { StyledMainWrapper } from "../styles/outlined";
export var Outlined = forwardRef(function (_a, ref) {
    var variant = _a.variant, _b = _a.type, type = _b === void 0 ? "text" : _b, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, _c = _a.placeholder, placeholder = _c === void 0 ? "" : _c, name = _a.name, props = __rest(_a, ["variant", "type", "onChange", "onBlur", "onFocus", "placeholder", "name"]);
    var inputProps = {
        onChange: onChange,
        onBlur: onBlur,
        onFocus: onFocus,
        placeholder: placeholder,
        name: name,
        disabled: props.disabled,
    };
    return (React.createElement(StyledMainWrapper, __assign({}, props, { variant: "outlined" }),
        React.createElement("div", { id: "input-content-wrapper" },
            React.createElement("label", null, props.label),
            props.iconLeft && !props.textarea && React.createElement("div", { id: "input-left-icon-wrapper" }),
            props.iconRight && !props.textarea && React.createElement("div", { id: "input-right-icon-wrapper" }),
            props.textarea ? React.createElement("textarea", __assign({}, inputProps)) : React.createElement("input", __assign({ type: type }, inputProps, { ref: ref })),
            props.error && props.errorMessage && !props.disabled && React.createElement("p", null, props.errorMessage))));
});
//# sourceMappingURL=outlined.js.map