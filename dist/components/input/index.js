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
import React, { useEffect, useRef, useState } from "react";
import { Container } from "./styles/container";
import { StyledInput, Textarea } from "./styles/input";
import { Typography } from "../typography";
import { LeftElement } from "./styles/leftElement";
import { RightElement } from "./styles/rightElement";
import { Theme } from "../../shared/theme";
export var Input = function (_a) {
    var name = _a.name, value = _a.value, theme = _a.theme, style = _a.style, disabled = _a.disabled, label = _a.label, textarea = _a.textarea, leftContent = _a.leftContent, rightContent = _a.rightContent, error = _a.error, hint = _a.hint, placeholder = _a.placeholder, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, id = _a.id, props = __rest(_a, ["name", "value", "theme", "style", "disabled", "label", "textarea", "leftContent", "rightContent", "error", "hint", "placeholder", "onChange", "onBlur", "onFocus", "id"]);
    var _b = useState(0), leftElementWidth = _b[0], setLeftElementWidth = _b[1];
    var _c = useState(0), rightElementWidth = _c[0], setRightElementWidth = _c[1];
    var leftElementRef = useRef(null);
    var rightElementRef = useRef(null);
    useEffect(function () {
        var _a;
        if (leftContent)
            setLeftElementWidth((_a = leftElementRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth);
    }, [leftContent]);
    useEffect(function () {
        var _a;
        if (rightContent)
            setRightElementWidth((_a = rightElementRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth);
    }, [rightContent]);
    var fieldProps = {
        onChange: onChange,
        onBlur: onBlur,
        onFocus: onFocus,
        name: name,
        id: id,
        disabled: disabled,
        placeholder: placeholder,
        value: value,
        error: error,
        style: __assign({ paddingLeft: "".concat(leftContent ? "".concat(leftElementWidth, "px") : "1em"), paddingRight: "".concat(rightContent ? "".concat(rightElementWidth, "px") : "1em") }, style),
    };
    return (React.createElement(Container, { theme: theme || Theme, label: label, error: error, hint: hint },
        React.createElement("div", null,
            label && React.createElement(Typography, { variant: "label", content: label }),
            textarea ? (React.createElement(Textarea, __assign({}, fieldProps, { theme: theme || Theme }))) : (React.createElement(StyledInput, __assign({}, fieldProps, props, { theme: theme || Theme }))),
            leftContent && React.createElement(LeftElement, { ref: leftElementRef }, leftContent),
            rightContent && React.createElement(RightElement, { ref: rightElementRef }, rightContent),
            error && !disabled && React.createElement(Typography, { variant: "body1", content: error }),
            hint && !error && React.createElement(Typography, { variant: "body1", content: hint }))));
};
//# sourceMappingURL=index.js.map