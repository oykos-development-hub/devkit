import React from "react";
import Select from "react-dropdown-select";
export var Dropdown = function (props) {
    var _a, _b;
    return (React.createElement(React.Fragment, null,
        !!props.label && React.createElement("p", null, props.label),
        React.createElement(Select, { options: props.data, values: [], color: props.color || ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.dark.one) || "#333", direction: props.direction || "ltr", dropdownPosition: props.dropdownPosition || "auto", multi: props.multi, disabled: props.disabled || false, closeOnSelect: props.closeOnSelect || false, searchable: props.searchable || false, loading: props.loading || false, clearable: props.clearable, clearOnBlur: props.clearOnBlur || false, placeholder: props.placeholder, onChange: function (value) { return props.onChange && props.onChange(value); } })));
};
//# sourceMappingURL=index.js.map