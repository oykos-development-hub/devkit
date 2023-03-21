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
export const Input = (_a) => {
    var { name, value, theme = Theme, style, disabled, label, textarea, leftContent, rightContent, error, hint, placeholder, onChange, onBlur, onFocus, id, inputRef, cols, rows } = _a, props = __rest(_a, ["name", "value", "theme", "style", "disabled", "label", "textarea", "leftContent", "rightContent", "error", "hint", "placeholder", "onChange", "onBlur", "onFocus", "id", "inputRef", "cols", "rows"]);
    const [leftElementWidth, setLeftElementWidth] = useState(0);
    const [rightElementWidth, setRightElementWidth] = useState(0);
    const leftElementRef = useRef(null);
    const rightElementRef = useRef(null);
    useEffect(() => {
        var _a;
        if (leftContent && leftElementRef.current)
            setLeftElementWidth((_a = leftElementRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth);
    }, [leftContent]);
    useEffect(() => {
        var _a;
        if (rightContent && rightElementRef.current)
            setRightElementWidth((_a = rightElementRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth);
    }, [rightContent]);
    const fieldProps = {
        onChange,
        onBlur,
        onFocus,
        name,
        id,
        disabled,
        placeholder,
        value,
        error,
        style: Object.assign({ paddingTop: "0.625em", paddingBottom: "0.625em", paddingLeft: `${leftContent ? `${leftElementWidth}px` : "0.875em"}`, paddingRight: `${rightContent ? `${rightElementWidth}px` : "0.875em"}` }, style),
    };
    return (React.createElement(Container, { theme: theme, label: label, error: error, hint: hint },
        label && React.createElement(Typography, { variant: "bodyMedium", content: label }),
        React.createElement("div", null,
            textarea ? (React.createElement(Textarea, Object.assign({}, fieldProps, { theme: theme || Theme, rows: rows || 5, cols: cols }))) : (React.createElement(StyledInput, Object.assign({}, fieldProps, props, { theme: theme || Theme, ref: inputRef }))),
            leftContent && React.createElement(LeftElement, { ref: leftElementRef }, leftContent),
            rightContent && React.createElement(RightElement, { ref: rightElementRef }, rightContent)),
        error && !disabled && React.createElement(Typography, { variant: "helperText", content: error }),
        hint && !error && React.createElement(Typography, { variant: "bodyMedium", content: hint })));
};
//# sourceMappingURL=index.js.map