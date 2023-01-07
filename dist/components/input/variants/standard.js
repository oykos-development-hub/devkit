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
import React from "react";
import { StyledMainWrapper } from "../styles/standard";
export var Standard = function (_a) {
    var variant = _a.variant, _b = _a.type, type = _b === void 0 ? "text" : _b, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, placeholder = _a.placeholder, name = _a.name, id = _a.id, value = _a.value, pattern = _a.pattern, inputMode = _a.inputMode, maxLength = _a.maxLength, inputRef = _a.inputRef, props = __rest(_a, ["variant", "type", "onChange", "onBlur", "onFocus", "placeholder", "name", "id", "value", "pattern", "inputMode", "maxLength", "inputRef"]);
    var textfieldProps = {
        onChange: onChange,
        onBlur: onBlur,
        onFocus: onFocus,
        placeholder: placeholder,
        name: name,
        disabled: props.disabled,
        id: id,
        value: value,
        maxLength: maxLength,
    };
    return (React.createElement(StyledMainWrapper, __assign({}, props, { variant: "standard" }),
        React.createElement("div", { id: "input-content-wrapper" },
            React.createElement("label", null, props.label),
            props.iconLeft && !props.textarea && React.createElement("div", { id: "input-left-icon-wrapper" }),
            props.iconRight && !props.textarea && React.createElement("div", { id: "input-right-icon-wrapper" }),
            props.textarea ? (React.createElement("textarea", __assign({}, textfieldProps))) : (React.createElement("input", __assign({ type: type }, textfieldProps, { ref: inputRef, inputMode: inputMode, pattern: pattern }))),
            props.error && props.error && !props.disabled && React.createElement("p", null, props.error))));
};
//# sourceMappingURL=standard.js.map