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
import { StyledDropdown } from "./styles/dropdown";
export var Dropdown = function (props) { return (React.createElement("div", null,
    !!props.label && React.createElement("p", null, props.label),
    React.createElement(React.Fragment, null,
        !!props.label && React.createElement("p", null, props.label),
        React.createElement(StyledDropdown, __assign({}, props, { options: props.data, values: [], direction: props.direction || "ltr", dropdownPosition: props.dropdownPosition || "auto", multi: props.multi, disabled: props.disabled || false, closeOnSelect: props.closeOnSelect || false, searchable: props.searchable || false, loading: props.loading || false, clearable: props.clearable, clearOnBlur: props.clearOnBlur || false, placeholder: props.placeholder, onChange: function (value) { return props.onChange && props.onChange(value); } }))))); };
//# sourceMappingURL=index.js.map