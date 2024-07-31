import React, { useMemo } from "react";
import { Theme } from "../../shared/theme";
import { LabelWrapper, StyledDropdown } from "./styles/styledDropdown";
import { SSSTypography } from "../typography";
export const SSSDropdown = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const mergedProps = useMemo(() => (Object.assign(Object.assign({ theme: Theme }, props), { name: props.name || "", isSearchable: props.isSearchable || true, showSearchIcon: props.showSearchIcon || false })), [props]);
    const handleChange = (value) => {
        props.onChange &&
            props.onChange(mergedProps.isMulti ? value : { id: value.value, title: value.label }, mergedProps.name);
    };
    const popperContainer = document.getElementById("custom-popper-container");
    return (React.createElement(StyledDropdown, Object.assign({}, mergedProps, { onChange: handleChange, options: mergedProps.options.map((option) => ({ value: option.id, label: option.title })), value: (mergedProps.value
            ? mergedProps.isMulti
                ? mergedProps.value
                : { value: ((_a = mergedProps.value) === null || _a === void 0 ? void 0 : _a.id) || 0, label: (_b = mergedProps.value) === null || _b === void 0 ? void 0 : _b.title }
            : null), menuPortalTarget: popperContainer ? popperContainer : document.body, label: typeof mergedProps.label === "string" ? (React.createElement(LabelWrapper, null,
            React.createElement(SSSTypography, { content: mergedProps.label, variant: "bodySmall", style: {
                    fontWeight: 600,
                    color: mergedProps.isDisabled ? (_c = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _c === void 0 ? void 0 : _c.gray300 : (_d = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _d === void 0 ? void 0 : _d.gray900,
                } }),
            React.createElement(SSSTypography, { content: "*", variant: "bodyLarge", style: {
                    marginLeft: 5,
                    color: mergedProps.isDisabled && mergedProps.isRequired
                        ? (_e = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _e === void 0 ? void 0 : _e.gray300
                        : mergedProps.isRequired
                            ? (_f = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _f === void 0 ? void 0 : _f.error400
                            : "transparent",
                } }))) : (React.createElement(SSSTypography, { content: mergedProps.label, variant: "bodySmall", style: {
                fontWeight: 600,
                color: mergedProps.isDisabled ? (_g = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _g === void 0 ? void 0 : _g.gray300 : (_h = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _h === void 0 ? void 0 : _h.gray900,
            } })) })));
};
//# sourceMappingURL=index.js.map