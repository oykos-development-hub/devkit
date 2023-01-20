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
import React, { useState } from "react";
import { InputTypes, InputVariants } from "./types";
import { StyledMainWrapper as Outlined } from "./styles/outlined";
import { StyledMainWrapper as Standard } from "./styles/standard";
var Wrapper = function (props) {
    var _a;
    var variant = (_a = props.variant) !== null && _a !== void 0 ? _a : InputVariants.standard;
    var wrapperProps = {
        variant: props.variant,
        type: props.type,
        error: props.error,
        errorColor: props.errorColor,
        fullWidth: props.fullWidth,
        disabled: props.disabled,
        textarea: props.textarea,
        search: props.search,
        confirmed: props.confirmed,
        iconLeft: props.iconLeft,
        iconRight: props.iconRight,
        theme: props.theme,
        style: props.style,
        children: props.children,
    };
    return variant === InputVariants.outlined ? React.createElement(Outlined, __assign({}, wrapperProps)) : React.createElement(Standard, __assign({}, wrapperProps));
};
export var Input = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? InputVariants.standard : _b, _c = _a.type, type = _c === void 0 ? InputTypes.text : _c, props = __rest(_a, ["variant", "type"]);
    var _d = useState(false), showClearButton = _d[0], setShowClearButton = _d[1];
    var changeHandler = function (event) {
        var _a, _b;
        if (props === null || props === void 0 ? void 0 : props.search)
            setShowClearButton(!!((_b = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.length));
        if (props === null || props === void 0 ? void 0 : props.onChange)
            props.onChange(event);
    };
    return (React.createElement(Wrapper, __assign({}, props, { variant: variant }),
        React.createElement("div", { className: "input-content-wrapper" },
            React.createElement("label", null, props.label),
            (props === null || props === void 0 ? void 0 : props.textarea) ? (React.createElement("textarea", __assign({}, props, { ref: props.inputRef, onChange: changeHandler }))) : (React.createElement("input", __assign({}, props, { ref: props.inputRef, onChange: changeHandler }))),
            props.iconLeft && !props.textarea && React.createElement("div", { id: "input-left-icon-wrapper" }, props.iconLeft),
            props.search && showClearButton && props.iconRight && !props.textarea && !props.disabled && (React.createElement("div", { id: "input-right-icon-wrapper", onClick: props.clear }, props.iconRight)),
            props.confirmed && props.iconRight && !props.textarea && !props.error && (React.createElement("div", { id: "input-right-icon-wrapper" }, props.iconRight)),
            props.error && props.iconRight && !props.textarea && !props.disabled && (React.createElement("div", { id: "input-right-icon-wrapper" }, props.iconRight)),
            props.error && !props.disabled && React.createElement("p", null, props.error))));
};
//# sourceMappingURL=index.js.map