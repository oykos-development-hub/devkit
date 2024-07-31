import React, { useState, useMemo, useEffect, forwardRef } from "react";
import { Theme } from "../../shared/theme";
import { LabelWrapper, StyledInput } from "./styles/styledInput";
import { SSSTypography } from "../typography";
import { EyeOffIcon } from "@oykos-development/devkit-react-ts-styled-components";
import { EyeIcon } from "../icons";
export const SSSInput = forwardRef((props, ref) => {
    var _a, _b, _c, _d;
    const [showPassword, setShowPassword] = useState(false);
    const [internalValue, setInternalValue] = useState(props.value ? props.value.toString() : "");
    const [displayValue, setDisplayValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const formatCurrencyInitialValue = () => {
        if (props.type !== "currency")
            return;
        if (props.value !== undefined && props.value !== null && !isFocused) {
            const formattedValue = formatNumber(props.value);
            setInternalValue(props.value.toString());
            setDisplayValue(formattedValue);
        }
    };
    useEffect(() => {
        formatCurrencyInitialValue();
    }, [props.value]);
    const mergedProps = useMemo(() => (Object.assign({ theme: Theme }, props)), [props]);
    const formatNumber = (num) => {
        if (num === "" || isNaN(num))
            return "";
        const parts = parseFloat(num).toFixed(2).split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return `${parts.join(".")}`;
    };
    const allowCurrencyHandleChange = (e, decimalPart) => {
        const input = e.target.value;
        let allow = true;
        if (input.slice(0, 1) === ".") {
            allow = false;
        }
        const dotsCount = input.split(".").length - 1;
        if (dotsCount > 1) {
            allow = false;
        }
        const invalidCharacters = /[^0-9.]/;
        if (invalidCharacters.test(input)) {
            allow = false;
        }
        if (!!decimalPart && (decimalPart === null || decimalPart === void 0 ? void 0 : decimalPart.length) > 2) {
            allow = false;
        }
        return allow;
    };
    const handleChange = (e) => {
        if (props.type === "currency") {
            let input = e.target.value;
            input = input.replace(/[^\d.]/g, "");
            const [integerPart, decimalPart] = input.split(".");
            let validDecimalPart = decimalPart;
            if (decimalPart && decimalPart.length > 2) {
                validDecimalPart = decimalPart.slice(0, 2);
            }
            const rawValue = validDecimalPart !== undefined ? `${integerPart}.${validDecimalPart}` : integerPart;
            if (!allowCurrencyHandleChange(e, decimalPart))
                return;
            setInternalValue(rawValue);
            setDisplayValue(validDecimalPart !== undefined ? `${integerPart}.${validDecimalPart}` : integerPart);
            props.onChange && props.onChange(e);
        }
        else {
            props.onChange && props.onChange(e);
        }
    };
    const handleBlur = () => {
        if (props.type === "currency") {
            const formattedValue = formatNumber(internalValue);
            setDisplayValue(formattedValue);
        }
        setIsFocused(false);
    };
    const handleFocus = () => {
        if (props.type === "currency") {
            setDisplayValue(internalValue);
        }
        setIsFocused(true);
    };
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (React.createElement(StyledInput, Object.assign({ ref: ref }, mergedProps, { label: typeof mergedProps.label === "string" ? (React.createElement(LabelWrapper, null,
            React.createElement(SSSTypography, { content: mergedProps.label, variant: "bodySmall", style: {
                    fontWeight: 600,
                    color: mergedProps.disabled ? (_a = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _a === void 0 ? void 0 : _a.gray300 : (_b = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _b === void 0 ? void 0 : _b.gray900,
                } }),
            React.createElement(SSSTypography, { content: "*", variant: "bodyLarge", style: {
                    marginLeft: 5,
                    color: mergedProps.disabled && mergedProps.isRequired
                        ? (_c = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _c === void 0 ? void 0 : _c.gray300
                        : mergedProps.isRequired
                            ? (_d = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _d === void 0 ? void 0 : _d.error400
                            : "transparent",
                } }))) : (mergedProps.label), onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, autoComplete: mergedProps.autoComplete ? mergedProps.autoComplete : "off", rightContent: mergedProps.type === "password" ? (showPassword ? (React.createElement(EyeOffIcon, { onClick: toggleShowPassword })) : (React.createElement(EyeIcon, { onClick: toggleShowPassword }))) : (mergedProps.rightContent), type: mergedProps.type === "password" && showPassword ? "text" : mergedProps.type, value: displayValue ? displayValue : mergedProps.value })));
});
SSSInput.displayName = "SSSInput";
//# sourceMappingURL=index.js.map