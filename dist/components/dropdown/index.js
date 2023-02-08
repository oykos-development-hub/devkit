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
import { Theme } from "../../shared/theme";
import { StyledSelect } from "./styles/select";
import { Container } from "./styles/container";
import { Typography } from "../typography";
import { XIcon } from "../icon";
import { Option } from "./styles/option";
import { ControlIconWrapper } from "./styles/controlIconWrapper";
export var Dropdown = function (_a) {
    var options = _a.options, _b = _a.theme, theme = _b === void 0 ? Theme : _b, _c = _a.isSearchable, isSearchable = _c === void 0 ? false : _c, _d = _a.noOptionsText, noOptionsText = _d === void 0 ? "No options" : _d, label = _a.label, style = _a.style, _e = _a.showArrow, showArrow = _e === void 0 ? true : _e, controlIcon = _a.controlIcon, optionIcon = _a.optionIcon, onChange = _a.onChange, props = __rest(_a, ["options", "theme", "isSearchable", "noOptionsText", "label", "style", "showArrow", "controlIcon", "optionIcon", "onChange"]);
    var _f = useState(), selectedOption = _f[0], setSelectedOption = _f[1];
    var _g = useState(0), controlIconWidth = _g[0], setControlIconWidth = _g[1];
    var controlIconWrapperRef = useRef(null);
    var optionLabel = function (e) { return (React.createElement(Option, { theme: theme },
        React.createElement("div", null,
            optionIcon && React.createElement("div", { className: "option-icon" },
                optionIcon,
                " "),
            e.label),
        (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) === e.value && (React.createElement("div", { className: "option-icon" },
            React.createElement(XIcon, { style: { color: theme.palette.gray700 } }))))); };
    useEffect(function () {
        var _a;
        if (controlIcon)
            setControlIconWidth((_a = controlIconWrapperRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth);
    }, []);
    return (React.createElement(Container, { theme: theme },
        label && React.createElement(Typography, { content: label, variant: "body1" }),
        React.createElement("div", null,
            React.createElement(StyledSelect, __assign({ options: options, classNamePrefix: "select", theme: theme, blurInputOnSelect: true, isSearchable: isSearchable, noOptionsMessage: function () { return noOptionsText; }, style: __assign({ paddingLeft: "".concat(controlIcon ? "calc(".concat(controlIconWidth, "px + 1em)") : "1em") }, style), onChange: function (e) {
                    setSelectedOption(e);
                    onChange && onChange(e);
                }, controlIcon: controlIcon, showArrow: showArrow, formatOptionLabel: optionLabel }, props)),
            React.createElement(ControlIconWrapper, { ref: controlIconWrapperRef }, controlIcon))));
};
//# sourceMappingURL=index.js.map