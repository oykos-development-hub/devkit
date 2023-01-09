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
import { StyledMainWrapper } from "../styles/standard";
export var Standard = function (_a) {
    var variant = _a.variant, _b = _a.type, type = _b === void 0 ? "text" : _b, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, _c = _a.placeholder, placeholder = _c === void 0 ? "" : _c, name = _a.name, id = _a.id, value = _a.value, pattern = _a.pattern, inputMode = _a.inputMode, maxLength = _a.maxLength, inputRef = _a.inputRef, props = __rest(_a, ["variant", "type", "onChange", "onBlur", "onFocus", "placeholder", "name", "id", "value", "pattern", "inputMode", "maxLength", "inputRef"]);
    var _d = useState(false), showClearButton = _d[0], setShowClearButton = _d[1];
    var changeHandler = function (event) {
        if (props.search)
            setShowClearButton(!!event.target.value.length);
        if (onChange)
            onChange(event);
    };
    var textfieldProps = {
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
            props.textarea ? (React.createElement("textarea", __assign({}, textfieldProps, { onChange: onChange }))) : (React.createElement("input", __assign({ type: type, ref: inputRef, inputMode: inputMode, pattern: pattern, onChange: changeHandler }, textfieldProps))),
            props.iconLeft && !props.textarea && React.createElement("div", { id: "input-left-icon-wrapper" }, props.iconLeft),
            props.search && showClearButton && props.iconRight && !props.textarea && !props.disabled && (React.createElement("div", { id: "input-right-icon-wrapper", onClick: props.clear }, props.iconRight)),
            props.confirmed && props.iconRight && !props.textarea && !props.error && (React.createElement("div", { id: "input-right-icon-wrapper" }, props.iconRight)),
            props.error && props.iconRight && !props.textarea && !props.disabled && (React.createElement("div", { id: "input-right-icon-wrapper" }, props.iconRight)),
            props.error && !props.disabled && React.createElement("p", null, props.error))));
};
//# sourceMappingURL=standard.js.map