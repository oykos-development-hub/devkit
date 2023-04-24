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
import { Option, OptionContent } from "./styles/option";
import { ControlIconWrapper } from "./styles/controlIconWrapper";
import { rem } from "polished";
import { Wrapper } from "./styles/wrapper";
import { components } from "react-select";
import { SearchIcon } from "../icon";
export const Dropdown = (_a) => {
    var { options, theme = Theme, isDisabled = false, isSearchable = false, isMulti = false, noOptionsText = "No options", label, style, isClearable, backspaceRemovesValue = true, showArrow = true, closeMenuOnSelect = true, dropdownIndicator, controlIcon, leftOptionIcon, rightOptionIcon, onChange, placeholder = "" } = _a, props = __rest(_a, ["options", "theme", "isDisabled", "isSearchable", "isMulti", "noOptionsText", "label", "style", "isClearable", "backspaceRemovesValue", "showArrow", "closeMenuOnSelect", "dropdownIndicator", "controlIcon", "leftOptionIcon", "rightOptionIcon", "onChange", "placeholder"]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [controlIconWidth, setControlIconWidth] = useState(0);
    const controlIconWrapperRef = useRef(null);
    const optionLabel = (e) => (React.createElement(Option, { theme: theme, isDisabled: isDisabled, style: style },
        React.createElement(OptionContent, null,
            leftOptionIcon && leftOptionIcon,
            e.label),
        !isMulti && (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) === e.value && (React.createElement(OptionContent, null, rightOptionIcon && rightOptionIcon))));
    useEffect(() => {
        var _a;
        if (controlIcon && controlIconWrapperRef.current)
            setControlIconWidth((_a = controlIconWrapperRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth);
    }, []);
    const DropdownIndicator = (props) => (React.createElement(components.DropdownIndicator, Object.assign({}, props), !dropdownIndicator ? React.createElement(SearchIcon, { stroke: theme.palette.gray700, fill: "none" }) : dropdownIndicator));
    return (React.createElement(Container, { theme: theme },
        label && React.createElement(Typography, { content: label, variant: "bodyMedium" }),
        React.createElement(Wrapper, null,
            React.createElement(StyledSelect, Object.assign({ backspaceRemovesValue: backspaceRemovesValue, options: options, classNamePrefix: "select", theme: theme, blurInputOnSelect: true, isSearchable: isSearchable, isDisabled: isDisabled, noOptionsMessage: () => noOptionsText, style: Object.assign({ paddingLeft: `${controlIcon && `calc(${controlIconWidth}px + ${rem("8px")})`}` }, style), onChange: (e) => {
                    !isMulti && setSelectedOption(e);
                    onChange && onChange(e);
                }, controlIcon: controlIcon, showArrow: showArrow, isMulti: isMulti, formatOptionLabel: optionLabel, placeholder: placeholder, closeMenuOnSelect: closeMenuOnSelect, isClearable: isClearable }, props, { components: isSearchable ? { DropdownIndicator } : {} })),
            React.createElement(ControlIconWrapper, { ref: controlIconWrapperRef }, controlIcon))));
};
//# sourceMappingURL=index.js.map