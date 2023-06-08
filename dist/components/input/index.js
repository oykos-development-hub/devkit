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
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Container } from "./styles/container";
import { StyledInput, Textarea } from "./styles/input";
import { Typography } from "../typography";
import { LeftElement } from "./styles/leftElement";
import { RightElement } from "./styles/rightElement";
import { Theme } from "../../shared/theme";
import { IconWrapper } from "./styles/iconWrapper";
import { rem } from "polished";
export const Input = forwardRef((_a, ref) => {
    var { name, value, theme = Theme, style, disabled, label, textarea, leftContent, rightContent, error = "", hint = "", placeholder = "", onChange, onBlur, onFocus, id, inputRef, cols, rows, className } = _a, props = __rest(_a, ["name", "value", "theme", "style", "disabled", "label", "textarea", "leftContent", "rightContent", "error", "hint", "placeholder", "onChange", "onBlur", "onFocus", "id", "inputRef", "cols", "rows", "className"]);
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
        style: Object.assign({ paddingTop: "0.625em", paddingBottom: "0.625em", paddingLeft: `${leftContent ? `${leftElementWidth}px` : rem("14px")}`, paddingRight: `${rightContent ? `${rightElementWidth}px` : rem("14px")}` }, style),
    };
    return (React.createElement(Container, { style: style, className: className },
        typeof label === "string" ? React.createElement(Typography, { variant: "bodySmall", content: label }) : label,
        React.createElement("div", null,
            textarea ? (React.createElement(Textarea, Object.assign({ ref: ref || inputRef }, fieldProps, props, { theme: theme, rows: rows || 5, cols: cols }))) : (React.createElement(StyledInput, Object.assign({ ref: ref || inputRef }, fieldProps, props, { theme: theme }))),
            leftContent && (React.createElement(LeftElement, { ref: leftElementRef },
                React.createElement(IconWrapper, null, leftContent))),
            rightContent && (React.createElement(RightElement, { ref: rightElementRef },
                React.createElement(IconWrapper, null, rightContent)))),
        error && !disabled && (React.createElement(Typography, { content: error, variant: "helperText", style: { color: theme.palette.error500 } })),
        hint && !error && (React.createElement(Typography, { content: hint, variant: "helperText", style: { color: theme.palette.gray700 } }))));
});
Input.displayName = "Input";
//# sourceMappingURL=index.js.map