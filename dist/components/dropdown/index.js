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
import Select from "react-select";
export var Dropdown = function (props) { return (React.createElement("div", null,
    !!props.label && React.createElement("p", null, props.label),
    React.createElement(Select, __assign({ options: props.data, isMulti: props.isMulti }, (props.onChange && { onchange: onchange }), { onBlur: props.onBlur }, (props.value && { value: props.data.find(function (option) { return option.value === props.value; }) }), { placeholder: props.placeholder, isDisabled: props.disabled, isSearchable: props.isSearchable || false, defaultValue: props.data.filter(function (option) { return props.defaultValue === option.value; }), autoFocus: true, backspaceRemovesValue: false, hideSelectedOptions: false, isClearable: props.isClearable, tabSelectsValue: false, menuPlacement: "auto", closeMenuOnSelect: props.closeMenuOnSelect })))); };
//# sourceMappingURL=index.js.map